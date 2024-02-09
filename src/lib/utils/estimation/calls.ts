import { Abi, createMemoryClient, encodeFunctionData, TevmClient } from 'tevm';
import { CallError } from 'tevm/errors';
import { ContractFunctionArgs } from 'viem';

import { AirdropMethod, Token } from '@/lib/types/airdrop';
import { TxGasUsed } from '@/lib/types/estimate';

type CallReturnData = {
  gasUsed: TxGasUsed;
  errors: CallError[];
};

export type CallToLocalChain = (
  id: `${AirdropMethod['id']}-${Token['id']}`,
  forkUrl: string,
  contractAddress: `0x${string}`,
  abi: Abi,
  functionName: string,
  args: ContractFunctionArgs,
  hasCustomStack: boolean,
) => Promise<CallReturnData>;

type CallToLocalChain_sub = (
  abi: Abi,
  functionName: string,
  args: ContractFunctionArgs,
) => { value: bigint; encodedData: `0x${string}` };

/* -------------------------------------------------------------------------- */
/*                                   ROUTER                                   */
/* -------------------------------------------------------------------------- */

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID || '';

export const callToLocalChain: CallToLocalChain = async (
  id,
  forkUrl,
  contractAddress,
  abi,
  functionName,
  args,
  hasCustomStack,
) => {
  const tevm: TevmClient = await createMemoryClient(
    { fork: { url: `${forkUrl}/${alchemyId}` } }
  );
  const nonForkedTevm = await createMemoryClient({});

  const caller = `0x${'01'.repeat(20)}` as const;
  const params = [abi, functionName, args] as const;

  const { value, encodedData } =
    id === 'push-native'
      ? airdropEthParams(...params)
      : id === 'push-ERC20'
        ? airdropEthParams(...params)
        : { value: BigInt(0), encodedData: '0x' as `0x${string}` };

  if (encodedData === '0x') {
    return returnEmptyCallDataWithError('Failed to encode call data');
  }

  const deployedBytecode = await tevm.eth.getCode({ address: contractAddress })

  await nonForkedTevm.setAccount({
    address: contractAddress,
    balance: BigInt(0),
    deployedBytecode,
  })

  // test it in the nonforked case
  const nonForkedCallResult = await nonForkedTevm.call({
    caller,
    to: contractAddress,
    value,
    data: encodedData,
    skipBalance: true,
  });
  // test it in the forked case
  const callResult = await tevm.call({
    caller,
    to: contractAddress,
    value,
    data: encodedData,
    skipBalance: true,
  });
  console.log('nonForkedCallResult', nonForkedCallResult)
  console.log('callResult', callResult)

  const l1submission = { deployment: '0', call: '0' };
  if (hasCustomStack) {
    // Calculate cost of submission
  }

  return {
    gasUsed: {
      deployment: { root: '0', l1submission: l1submission.deployment },
      call: { root: callResult.executionGasUsed.toString(), l1submission: l1submission.call },
    },
    errors: callResult.errors || [],
  };
};

/* -------------------------------------------------------------------------- */
/*                                    CALLS                                   */
/* -------------------------------------------------------------------------- */

const airdropEthParams: CallToLocalChain_sub = (abi, functionName, args) => {
  let callValue = BigInt(0);
  let encodedData = '0x' as `0x${string}`;

  try {
    const [recipients, amounts, value] = args;
    callValue = BigInt(value as string);
    encodedData = encodeFunctionData({ abi, functionName, args: [recipients, amounts] });

    return { value: callValue, encodedData };
  } catch (err) {
    console.error(err);
    return { value: BigInt(0), encodedData: '0x' };
  }
};

// const airdropERC20Params: CallToLocalChain_sub = async ({
//   tevm,
//   caller,
//   contractAddress,
//   abi,
//   functionName,
//   args,
//   hasCustomStack,
// }) => {
//   const totalAmount = args[2];
// };

/* -------------------------------------------------------------------------- */
/*                                    UTILS                                   */
/* -------------------------------------------------------------------------- */

const returnEmptyCallDataWithError = (message: string): CallReturnData => ({
  gasUsed: {
    deployment: { root: '0', l1submission: '0' },
    call: { root: '0', l1submission: '0' },
  },
  errors: [{ _tag: 'UnexpectedError', name: 'UnexpectedError', message }],
});
