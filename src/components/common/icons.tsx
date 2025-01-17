import Link from 'next/link';

import { type LucideProps, Moon, SunMedium } from 'lucide-react';

import { cn } from '@/lib/utils';

export type Icon = (props: LucideProps) => JSX.Element;

export const Icons = {
  /* -------------------------------------------------------------------------- */
  /*                                    BASE                                    */
  /* -------------------------------------------------------------------------- */
  sun: SunMedium,
  moon: Moon,
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  twitter: (props: LucideProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <Link
      href={props.href || '/'}
      className={cn('h-8 w-8 hover:brightness-75', props.className)}
      aria-label="Home"
    >
      <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g data-name="Layer 2">
          <g data-name="done-all">
            <path d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z" />
            <path d="M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z" />
            <path d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z" />
          </g>
        </g>
      </svg>
    </Link>
  ),
  menu: (props: LucideProps) => (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      {...props}
    >
      <path
        d="M3 5H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 12H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 19H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  /* -------------------------------------------------------------------------- */
  /*                                   CHAINS                                   */
  /* -------------------------------------------------------------------------- */
  // https://github.com/Cryptofonts/cryptoicons
  ethereum: (props: LucideProps) => (
    <svg
      version="1.1"
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      {...props}
    >
      <polygon fill="#2F3030" points="249.982,6.554 397.98,251.112 250.53,188.092 " />
      <polygon fill="#828384" points="102.39,251.112 249.982,6.554 250.53,188.092 " />
      <polygon fill="#343535" points="249.982,341.285 102.39,251.112 250.53,188.092 " />
      <polygon fill="#131313" points="397.98,251.112 250.53,188.092 249.982,341.285 " />
      <polygon fill="#2F3030" points="249.982,372.329 397.98,284.597 249.982,493.13 " />
      <polygon fill="#828384" points="249.982,372.329 102.39,284.597 249.982,493.13 " />
    </svg>
  ),
  polygon: (props: LucideProps) => (
    <svg
      version="1.1"
      id="matic"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      {...props}
    >
      <path
        fill="#8247E5"
        d="M377.3,163.9c-9.2-5.4-21.2-5.4-31.4,0l-72,41.7l-48.9,27.2l-72,41.7c-9.2,5.4-21.2,5.4-31.4,0l-57.2-32.6
	c-9.2-5.4-15.7-15.4-15.7-26.3v-64.3c0-10.9,5.5-20.8,15.7-26.3l56.3-31.7c9.2-5.4,21.2-5.4,31.4,0l56.3,31.7
	c9.2,5.4,15.7,15.4,15.7,26.3v41.7l48.9-28.1v-41.7c0-10.9-5.5-20.8-15.7-26.3L153.1,37.1c-9.2-5.4-21.2-5.4-31.4,0L15.7,96.9
	C5.5,102.3,0,112.3,0,123.2v120.5c0,10.9,5.5,20.8,15.7,26.3l106.1,59.8c9.2,5.4,21.2,5.4,31.4,0l72-40.8l48.9-28.1l72-40.8
	c9.2-5.4,21.2-5.4,31.4,0l56.3,31.7c9.2,5.4,15.7,15.4,15.7,26.3v64.3c0,10.9-5.5,20.8-15.7,26.3l-56.3,32.6
	c-9.2,5.4-21.2,5.4-31.4,0l-56.3-31.7c-9.2-5.4-15.7-15.4-15.7-26.3v-41.7l-48.9,28.1v41.7c0,10.9,5.5,20.8,15.7,26.3l106.1,59.8
	c9.2,5.4,21.2,5.4,31.4,0l106.1-59.8c9.2-5.4,15.7-15.4,15.7-26.3V250.9c0-10.9-5.5-20.8-15.7-26.3L377.3,163.9z"
      />
    </svg>
  ),
  // https://cryptologos.cc/
  arbitrum: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 2500 2500"
      {...props}
    >
      <g id="Layer_x0020_1">
        <g id="_2405588477232">
          <rect fill="none" width="2500" height="2500"></rect>
          <g>
            <g>
              <path
                fill="#213147"
                d="M226,760v980c0,63,33,120,88,152l849,490c54,31,121,31,175,0l849-490c54-31,88-89,88-152V760      c0-63-33-120-88-152l-849-490c-54-31-121-31-175,0L314,608c-54,31-87,89-87,152H226z"
              ></path>
              <g>
                <g>
                  <g>
                    <path
                      fill="#12AAFF"
                      d="M1435,1440l-121,332c-3,9-3,19,0,29l208,571l241-139l-289-793C1467,1422,1442,1422,1435,1440z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#12AAFF"
                      d="M1678,882c-7-18-32-18-39,0l-121,332c-3,9-3,19,0,29l341,935l241-139L1678,883V882z"
                    ></path>
                  </g>
                </g>
              </g>
              <g>
                <path
                  fill="#9DCCED"
                  d="M1250,155c6,0,12,2,17,5l918,530c11,6,17,18,17,30v1060c0,12-7,24-17,30l-918,530c-5,3-11,5-17,5       s-12-2-17-5l-918-530c-11-6-17-18-17-30V719c0-12,7-24,17-30l918-530c5-3,11-5,17-5l0,0V155z M1250,0c-33,0-65,8-95,25L237,555       c-59,34-95,96-95,164v1060c0,68,36,130,95,164l918,530c29,17,62,25,95,25s65-8,95-25l918-530c59-34,95-96,95-164V719       c0-68-36-130-95-164L1344,25c-29-17-62-25-95-25l0,0H1250z"
                ></path>
              </g>
              <polygon fill="none" points="642,2179 727,1947 897,2088 738,2234     "></polygon>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M1172,644H939c-17,0-33,11-39,27L401,2039l241,139l550-1507c5-14-5-28-19-28L1172,644z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M1580,644h-233c-17,0-33,11-39,27L738,2233l241,139l620-1701c5-14-5-28-19-28V644z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  optimism: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="Layer_1"
      x={0}
      y={0}
      viewBox="0 0 500 500"
      {...props}
    >
      <circle
        cx={250}
        cy={250}
        r={250}
        style={{
          fill: '#ff0420',
        }}
      />
      <path
        d="M177.1 316.4c-14.9 0-27.1-3.5-36.6-10.5-9.4-7.1-14.1-17.3-14.1-30.4 0-2.8.3-6.1.9-10.1 1.6-9 3.9-19.8 6.9-32.5 8.5-34.4 30.5-51.6 65.9-51.6 9.6 0 18.3 1.6 25.9 4.9 7.6 3.1 13.6 7.9 18 14.3 4.4 6.3 6.6 13.8 6.6 22.5 0 2.6-.3 5.9-.9 9.9-1.9 11.1-4.1 22-6.8 32.5-4.4 17.1-11.9 30-22.7 38.5-10.7 8.4-25.1 12.5-43.1 12.5zm2.7-27c7 0 12.9-2.1 17.8-6.2 5-4.1 8.6-10.4 10.7-19 2.9-11.8 5.1-22 6.6-30.8.5-2.6.8-5.3.8-8.1 0-11.4-5.9-17.1-17.8-17.1-7 0-13 2.1-18 6.2-4.9 4.1-8.4 10.4-10.5 19-2.3 8.4-4.5 18.6-6.8 30.8-.5 2.5-.8 5.1-.8 7.9-.1 11.6 6 17.3 18 17.3zM259.3 314.6c-1.4 0-2.4-.4-3.2-1.3-.6-1-.8-2.1-.6-3.4l25.9-122c.2-1.4.9-2.5 2.1-3.4 1.1-.9 2.3-1.3 3.6-1.3H337c13.9 0 25 2.9 33.4 8.6 8.5 5.8 12.8 14.1 12.8 25 0 3.1-.4 6.4-1.1 9.8-3.1 14.4-9.4 25-19 31.9-9.4 6.9-22.3 10.3-38.7 10.3h-25.3l-8.6 41.1c-.3 1.4-.9 2.5-2.1 3.4-1.1.9-2.3 1.3-3.6 1.3h-25.5zm66.4-71.7c5.3 0 9.8-1.4 13.7-4.3 4-2.9 6.6-7 7.9-12.4.4-2.1.6-4 .6-5.6 0-3.6-1.1-6.4-3.2-8.3-2.1-2-5.8-3-10.9-3h-22.5l-7.1 33.6h21.5z"
        fill="#fff"
      />
    </svg>
  ),
  // https://altcoinsbox.com/base-logo-download-coinbase-base-logo-svg-png-ai-eps-jpg/
  base: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      id="Layer_1"
      x={0}
      y={0}
      viewBox="0 0 2500 2500"
      {...props}
    >
      <style>
        {'.st0{clip-path:url(#SVGID_00000165206057370772089280000013047202933105835397_)}'}
      </style>
      <g id="Layer_x0020_1">
        <defs>
          <path
            id="SVGID_1_"
            d="M1250 2500C559.6 2500 0 1940.4 0 1250S559.6 0 1250 0s1250 559.6 1250 1250-559.6 1250-1250 1250z"
          />
        </defs>
        <clipPath id="SVGID_00000137130877621503601290000017679510272143242652_">
          <use
            xlinkHref="#SVGID_1_"
            style={{
              overflow: 'visible',
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: 'url(#SVGID_00000137130877621503601290000017679510272143242652_)',
          }}
        >
          <path
            d="m1250 1250-1768-10.9 1.6-65z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#fefeff',
            }}
          />
          <path
            id="_1"
            d="m1250 1250-1766.7-65.1 2.7-54.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#fdfeff',
            }}
          />
          <path
            id="_2"
            d="m1250 1250-1764.6-108.4 4-54.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#fcfdff',
            }}
          />
          <path
            id="_3"
            d="m1250 1250-1761.4-151.7 5.3-54z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#fbfcff',
            }}
          />
          <path
            id="_4"
            d="m1250 1250-1757.1-194.9 6.6-53.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#fafcff',
            }}
          />
          <path
            id="_5"
            d="m1250 1250-1751.8-237.9 7.9-53.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f9fbff',
            }}
          />
          <path
            id="_6"
            d="M1250 1250-495.4 969.1l9.2-53.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f8faff',
            }}
          />
          <path
            id="_7"
            d="M1250 1250-488 926.4l10.5-53.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f7faff',
            }}
          />
          <path
            id="_8"
            d="M1250 1250-479.6 883.9l11.9-53z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f6f9ff',
            }}
          />
          <path
            id="_9"
            d="M1250 1250-470.1 841.5l13.2-52.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f5f8ff',
            }}
          />
          <path
            id="_10"
            d="M1250 1250-459.5 799.4l14.4-52.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f4f8ff',
            }}
          />
          <path
            id="_11"
            d="M1250 1250-448 757.6l15.8-51.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f3f7ff',
            }}
          />
          <path
            id="_12"
            d="M1250 1250-435.4 716.1l17.1-51.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f2f6ff',
            }}
          />
          <path
            id="_13"
            d="M1250 1250-421.8 674.9l18.3-51.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f1f6ff',
            }}
          />
          <path
            id="_14"
            d="M1250 1250-407.1 634l19.5-50.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#f0f5ff',
            }}
          />
          <path
            id="_15"
            d="M1250 1250-391.5 593.5l20.7-50.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#eff4ff',
            }}
          />
          <path
            id="_16"
            d="M1250 1250-374.9 553.4l22-49.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#eef3ff',
            }}
          />
          <path
            id="_17"
            d="M1250 1250-357.3 513.8l23.2-49z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#edf3ff',
            }}
          />
          <path
            id="_18"
            d="M1250 1250-338.8 474.6l24.4-48.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#ecf2ff',
            }}
          />
          <path
            id="_19"
            d="M1250 1250-319.3 435.8l25.6-47.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#ebf1ff',
            }}
          />
          <path
            id="_20"
            d="M1250 1250-298.8 397.6l26.7-47.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#eaf1ff',
            }}
          />
          <path
            id="_21"
            d="M1250 1250-277.4 359.8l27.9-46.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e9f0ff',
            }}
          />
          <path
            id="_22"
            d="M1250 1250-255.1 322.6l29-45.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e8efff',
            }}
          />
          <path
            id="_23"
            d="M1250 1250-231.9 285.9l30.2-45.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e7efff',
            }}
          />
          <path
            id="_24"
            d="M1250 1250-207.8 249.8l31.2-44.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e6eeff',
            }}
          />
          <path
            id="_25"
            d="M1250 1250-182.8 214.4l32.3-43.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e5edff',
            }}
          />
          <path
            id="_26"
            d="M1250 1250-157 179.5l33.4-42.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e4edff',
            }}
          />
          <path
            id="_27"
            d="M1250 1250-130.3 145.3l34.4-41.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e3ecff',
            }}
          />
          <path
            id="_28"
            d="M1250 1250-102.7 111.8l35.4-41.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e2ebff',
            }}
          />
          <path
            id="_29"
            d="M1250 1250-74.4 78.9-38 38.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e1ebff',
            }}
          />
          <path
            id="_30"
            d="M1250 1250-45.3 46.8-7.9 7.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#e0eaff',
            }}
          />
          <path
            id="_31"
            d="M1250 1250-15.4 15.4 23-23z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#dfe9ff',
            }}
          />
          <path
            id="_32"
            d="M1250 1250 15.4-15.4l39.2-37.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#dee9ff',
            }}
          />
          <path
            id="_33"
            d="M1250 1250 46.8-45.3 87-81.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#dde8ff',
            }}
          />
          <path
            id="_34"
            d="M1250 1250 78.9-74.4l41.1-35.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#dce7ff',
            }}
          />
          <path
            id="_35"
            d="M1250 1250 111.8-102.7l41.9-34.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#dbe7ff',
            }}
          />
          <path
            id="_36"
            d="M1250 1250 145.3-130.3l42.8-33.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#dae6ff',
            }}
          />
          <path
            id="_37"
            d="M1250 1250 179.5-157l43.6-32.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d9e5ff',
            }}
          />
          <path
            id="_38"
            d="M1250 1250 214.4-182.8l44.3-31.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d8e5ff',
            }}
          />
          <path
            id="_39"
            d="M1250 1250 249.8-207.8l45.1-30.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d7e4ff',
            }}
          />
          <path
            id="_40"
            d="M1250 1250 285.9-231.9l45.9-29z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d6e3ff',
            }}
          />
          <path
            id="_41"
            d="M1250 1250 322.6-255.1l46.5-27.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d5e3ff',
            }}
          />
          <path
            id="_42"
            d="M1250 1250 359.8-277.4l47.2-26.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d4e2ff',
            }}
          />
          <path
            id="_43"
            d="M1250 1250 397.6-298.8l47.8-25.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d3e1ff',
            }}
          />
          <path
            id="_44"
            d="M1250 1250 435.8-319.3l48.5-24.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d2e0ff',
            }}
          />
          <path
            id="_45"
            d="M1250 1250 474.6-338.8l49-23.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d1e0ff',
            }}
          />
          <path
            id="_46"
            d="M1250 1250 513.8-357.3l49.6-22z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#d0dfff',
            }}
          />
          <path
            id="_47"
            d="M1250 1250 553.4-374.9l50.2-20.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#cfdeff',
            }}
          />
          <path
            id="_48"
            d="M1250 1250 593.5-391.5l50.7-19.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#cedeff',
            }}
          />
          <path
            id="_49"
            d="M1250 1250 634-407.1l51.1-18.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#cdddff',
            }}
          />
          <path
            id="_50"
            d="M1250 1250 674.9-421.8l51.5-16.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#ccdcff',
            }}
          />
          <path
            id="_51"
            d="M1250 1250 716.1-435.4l51.9-15.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#cbdcff',
            }}
          />
          <path
            id="_52"
            d="M1250 1250 757.6-448l52.3-14.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#cadbff',
            }}
          />
          <path
            id="_53"
            d="M1250 1250 799.4-459.5l52.6-13.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c9daff',
            }}
          />
          <path
            id="_54"
            d="M1250 1250 841.5-470.1l52.9-11.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c8daff',
            }}
          />
          <path
            id="_55"
            d="M1250 1250 883.9-479.6l53.1-10.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c7d9ff',
            }}
          />
          <path
            id="_56"
            d="M1250 1250 926.4-488l53.4-9.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c6d8ff',
            }}
          />
          <path
            id="_57"
            d="M1250 1250 969.1-495.4l53.7-8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c5d8ff',
            }}
          />
          <path
            id="_58"
            d="M1250 1250 1012.1-501.8l53.8-6.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c4d7ff',
            }}
          />
          <path
            id="_59"
            d="M1250 1250 1055.1-507.1l54-5.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c3d6ff',
            }}
          />
          <path
            id="_60"
            d="M1250 1250 1098.3-511.4l54.1-4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c2d6ff',
            }}
          />
          <path
            id="_61"
            d="M1250 1250 1141.6-514.6l54.2-2.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c1d5ff',
            }}
          />
          <path
            id="_62"
            d="m1250 1250-65.1-1766.7 54.2-1.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#c0d4ff',
            }}
          />
          <path
            id="_63"
            d="m1250 1250-21.7-1767.8h54.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#bfd4ff',
            }}
          />
          <path
            id="_64"
            d="m1250 1250 21.7-1767.8 54.2 1.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#bed3ff',
            }}
          />
          <path
            id="_65"
            d="m1250 1250 65.1-1766.7 54.1 2.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#bdd2ff',
            }}
          />
          <path
            id="_66"
            d="m1250 1250 108.4-1764.6 54.1 4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#bcd2ff',
            }}
          />
          <path
            id="_67"
            d="m1250 1250 151.7-1761.4 54 5.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#bbd1ff',
            }}
          />
          <path
            id="_68"
            d="m1250 1250 194.8-1757.1 53.9 6.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#bad0ff',
            }}
          />
          <path
            id="_69"
            d="m1250 1250 237.9-1751.8 53.7 7.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b9d0ff',
            }}
          />
          <path
            id="_70"
            d="m1250 1250 280.8-1745.4 53.5 9.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b8cfff',
            }}
          />
          <path
            id="_71"
            d="m1250 1250 323.6-1738 53.2 10.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b7ceff',
            }}
          />
          <path
            id="_72"
            d="m1250 1250 366.1-1729.6 53 11.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b6cdff',
            }}
          />
          <path
            id="_73"
            d="m1250 1250 408.5-1720.1 52.6 13.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b5cdff',
            }}
          />
          <path
            id="_74"
            d="m1250 1250 450.6-1709.5 52.2 14.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b4ccff',
            }}
          />
          <path
            id="_75"
            d="m1250 1250 492.4-1698 51.9 15.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b3cbff',
            }}
          />
          <path
            id="_76"
            d="m1250 1250 533.9-1685.4 51.5 17.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b2cbff',
            }}
          />
          <path
            id="_77"
            d="m1250 1250 575.1-1671.8 51.1 18.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b1caff',
            }}
          />
          <path
            id="_78"
            d="m1250 1250 616-1657.1 50.6 19.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#b0c9ff',
            }}
          />
          <path
            id="_79"
            d="m1250 1250 656.4-1641.5 50.2 20.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#afc9ff',
            }}
          />
          <path
            id="_80"
            d="m1250 1250 696.5-1624.9 49.6 22z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#aec8ff',
            }}
          />
          <path
            id="_81"
            d="m1250 1250 736.2-1607.3 49 23.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#adc7ff',
            }}
          />
          <path
            id="_82"
            d="m1250 1250 775.4-1588.8 48.5 24.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#acc7ff',
            }}
          />
          <path
            id="_83"
            d="m1250 1250 814.2-1569.3 47.8 25.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#abc6ff',
            }}
          />
          <path
            id="_84"
            d="m1250 1250 852.4-1548.8 47.3 26.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#aac5ff',
            }}
          />
          <path
            id="_85"
            d="m1250 1250 890.2-1527.4 46.5 27.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a9c5ff',
            }}
          />
          <path
            id="_86"
            d="m1250 1250 927.4-1505.1 45.8 29z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a8c4ff',
            }}
          />
          <path
            id="_87"
            d="m1250 1250 964.1-1481.9 45.1 30.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a7c3ff',
            }}
          />
          <path
            id="_88"
            d="M1250 1250 2250.2-207.8l44.3 31.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a6c3ff',
            }}
          />
          <path
            id="_89"
            d="M1250 1250 2285.6-182.8l43.6 32.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a5c2ff',
            }}
          />
          <path
            id="_90"
            d="M1250 1250 2320.5-157l42.7 33.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a4c1ff',
            }}
          />
          <path
            id="_91"
            d="M1250 1250 2354.7-130.3l41.9 34.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a3c1ff',
            }}
          />
          <path
            id="_92"
            d="M1250 1250 2388.2-102.7l41.1 35.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a2c0ff',
            }}
          />
          <path
            id="_93"
            d="M1250 1250 2421.1-74.4l40.2 36.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a1bfff',
            }}
          />
          <path
            id="_94"
            d="M1250 1250 2453.2-45.3l39.3 37.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#a0bfff',
            }}
          />
          <path
            id="_95"
            d="M1250 1250 2484.6-15.4 2523 23z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#9fbeff',
            }}
          />
          <path
            id="_96"
            d="M1250 1250 2515.3 15.4l37.4 39.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#9ebdff',
            }}
          />
          <path
            id="_97"
            d="M1250 1250 2545.3 46.8l36.4 40.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#9dbdff',
            }}
          />
          <path
            id="_98"
            d="M1250 1250 2574.4 78.9l35.4 41.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#9cbcff',
            }}
          />
          <path
            id="_99"
            d="M1250 1250 2602.7 111.8l34.4 41.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#9bbbff',
            }}
          />
          <path
            id="_100"
            d="M1250 1250 2630.3 145.3l33.3 42.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#9abaff',
            }}
          />
          <path
            id="_101"
            d="M1250 1250 2657 179.5l32.3 43.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#99baff',
            }}
          />
          <path
            id="_102"
            d="M1250 1250 2682.8 214.4l31.2 44.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#98b9ff',
            }}
          />
          <path
            id="_103"
            d="M1250 1250 2707.8 249.8l30.1 45.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#97b8ff',
            }}
          />
          <path
            id="_104"
            d="m1250 1250 1481.9-964.1 29 45.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#96b8ff',
            }}
          />
          <path
            id="_105"
            d="m1250 1250 1505.1-927.4 27.9 46.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#95b7ff',
            }}
          />
          <path
            id="_106"
            d="m1250 1250 1527.4-890.2 26.7 47.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#94b6ff',
            }}
          />
          <path
            id="_107"
            d="m1250 1250 1548.8-852.4 25.5 47.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#93b6ff',
            }}
          />
          <path
            id="_108"
            d="m1250 1250 1569.2-814.2 24.4 48.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#92b5ff',
            }}
          />
          <path
            id="_109"
            d="m1250 1250 1588.8-775.4 23.1 49z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#91b4ff',
            }}
          />
          <path
            id="_110"
            d="m1250 1250 1607.3-736.2 22 49.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#90b4ff',
            }}
          />
          <path
            id="_111"
            d="m1250 1250 1624.9-696.6 20.7 50.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#8fb3ff',
            }}
          />
          <path
            id="_112"
            d="m1250 1250 1641.5-656.5 19.5 50.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#8eb2ff',
            }}
          />
          <path
            id="_113"
            d="m1250 1250 1657.1-616 18.3 51.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#8db2ff',
            }}
          />
          <path
            id="_114"
            d="m1250 1250 1671.7-575.1 17 51.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#8cb1ff',
            }}
          />
          <path
            id="_115"
            d="m1250 1250 1685.3-533.9 15.8 51.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#8bb0ff',
            }}
          />
          <path
            id="_116"
            d="m1250 1250 1697.9-492.4 14.5 52.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#8ab0ff',
            }}
          />
          <path
            id="_117"
            d="m1250 1250 1709.5-450.6 13.2 52.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#89afff',
            }}
          />
          <path
            id="_118"
            d="m1250 1250 1720.1-408.5 11.8 52.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#88aeff',
            }}
          />
          <path
            id="_119"
            d="m1250 1250 1729.5-366.1 10.6 53.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#87aeff',
            }}
          />
          <path
            id="_120"
            d="m1250 1250 1738-323.6 9.3 53.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#86adff',
            }}
          />
          <path
            id="_121"
            d="m1250 1250 1745.4-280.9 8 53.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#85acff',
            }}
          />
          <path
            id="_122"
            d="m1250 1250 1751.8-237.9 6.6 53.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#84acff',
            }}
          />
          <path
            id="_123"
            d="m1250 1250 1757.1-194.9 5.3 54z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#83abff',
            }}
          />
          <path
            id="_124"
            d="m1250 1250 1761.4-151.7 4 54.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#82aaff',
            }}
          />
          <path
            id="_125"
            d="m1250 1250 1764.6-108.4 2.6 54.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#81aaff',
            }}
          />
          <path
            id="_126"
            d="m1250 1250 1766.7-65.1 1.3 54.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#80a9ff',
            }}
          />
          <path
            id="_127"
            d="m1250 1250 1767.7-21.7v54.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#7fa8ff',
            }}
          />
          <path
            id="_128"
            d="m1250 1250 1767.7 21.7-1.3 54.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#7ea7ff',
            }}
          />
          <path
            id="_129"
            d="m1250 1250 1766.7 65.1-2.7 54.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#7da7ff',
            }}
          />
          <path
            id="_130"
            d="m1250 1250 1764.6 108.4-4 54.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#7ca6ff',
            }}
          />
          <path
            id="_131"
            d="m1250 1250 1761.4 151.7-5.3 54z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#7ba5ff',
            }}
          />
          <path
            id="_132"
            d="m1250 1250 1757.1 194.8-6.6 53.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#7aa5ff',
            }}
          />
          <path
            id="_133"
            d="m1250 1250 1751.8 237.9-8 53.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#79a4ff',
            }}
          />
          <path
            id="_134"
            d="m1250 1250 1745.4 280.8-9.2 53.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#78a3ff',
            }}
          />
          <path
            id="_135"
            d="m1250 1250 1738 323.6-10.6 53.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#77a3ff',
            }}
          />
          <path
            id="_136"
            d="m1250 1250 1729.5 366.1-11.8 53z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#76a2ff',
            }}
          />
          <path
            id="_137"
            d="m1250 1250 1720.1 408.5-13.2 52.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#75a1ff',
            }}
          />
          <path
            id="_138"
            d="m1250 1250 1709.5 450.6-14.4 52.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#74a1ff',
            }}
          />
          <path
            id="_139"
            d="m1250 1250 1697.9 492.4-15.7 51.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#73a0ff',
            }}
          />
          <path
            id="_140"
            d="m1250 1250 1685.3 533.9-17 51.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#729fff',
            }}
          />
          <path
            id="_141"
            d="m1250 1250 1671.7 575.1-18.2 51.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#719fff',
            }}
          />
          <path
            id="_142"
            d="m1250 1250 1657.1 616-19.5 50.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#709eff',
            }}
          />
          <path
            id="_143"
            d="m1250 1250 1641.5 656.4-20.8 50.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6f9dff',
            }}
          />
          <path
            id="_144"
            d="m1250 1250 1624.9 696.5-22 49.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6e9dff',
            }}
          />
          <path
            id="_145"
            d="m1250 1250 1607.3 736.2-23.2 49z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6d9cff',
            }}
          />
          <path
            id="_146"
            d="m1250 1250 1588.8 775.4-24.4 48.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6c9bff',
            }}
          />
          <path
            id="_147"
            d="m1250 1250 1569.2 814.2-25.5 47.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6b9bff',
            }}
          />
          <path
            id="_148"
            d="m1250 1250 1548.8 852.4-26.7 47.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6a9aff',
            }}
          />
          <path
            id="_149"
            d="m1250 1250 1527.4 890.2-27.9 46.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6999ff',
            }}
          />
          <path
            id="_150"
            d="m1250 1250 1505.1 927.4-29 45.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6899ff',
            }}
          />
          <path
            id="_151"
            d="m1250 1250 1481.9 964.1-30.2 45.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6798ff',
            }}
          />
          <path
            id="_152"
            d="m1250 1250 1457.8 1000.2-31.2 44.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6697ff',
            }}
          />
          <path
            id="_153"
            d="m1250 1250 1432.8 1035.6-32.3 43.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6597ff',
            }}
          />
          <path
            id="_154"
            d="m1250 1250 1407 1070.5-33.4 42.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6496ff',
            }}
          />
          <path
            id="_155"
            d="m1250 1250 1380.3 1104.7-34.4 41.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6395ff',
            }}
          />
          <path
            id="_156"
            d="m1250 1250 1352.7 1138.2-35.4 41.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6294ff',
            }}
          />
          <path
            id="_157"
            d="m1250 1250 1324.4 1171.1-36.4 40.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6194ff',
            }}
          />
          <path
            id="_158"
            d="m1250 1250 1295.3 1203.2-37.4 39.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#6093ff',
            }}
          />
          <path
            id="_159"
            d="m1250 1250 1265.3 1234.6-38.3 38.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#5f92ff',
            }}
          />
          <path
            id="_160"
            d="m1250 1250 1234.6 1265.3-39.2 37.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#5e92ff',
            }}
          />
          <path
            id="_161"
            d="m1250 1250 1203.2 1295.3-40.2 36.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#5d91ff',
            }}
          />
          <path
            id="_162"
            d="m1250 1250 1171.1 1324.4-41.1 35.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#5c90ff',
            }}
          />
          <path
            id="_163"
            d="m1250 1250 1138.2 1352.7-41.9 34.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#5b90ff',
            }}
          />
          <path
            id="_164"
            d="m1250 1250 1104.7 1380.3-42.8 33.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#5a8fff',
            }}
          />
          <path
            id="_165"
            d="m1250 1250 1070.5 1407-43.6 32.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#598eff',
            }}
          />
          <path
            id="_166"
            d="m1250 1250 1035.6 1432.8-44.3 31.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#588eff',
            }}
          />
          <path
            id="_167"
            d="m1250 1250 1000.2 1457.8-45.2 30.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#578dff',
            }}
          />
          <path
            id="_168"
            d="m1250 1250 964.1 1481.9-45.9 29z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#568cff',
            }}
          />
          <path
            id="_169"
            d="m1250 1250 927.4 1505.1-46.5 27.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#558cff',
            }}
          />
          <path
            id="_170"
            d="m1250 1250 890.2 1527.4-47.2 26.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#548bff',
            }}
          />
          <path
            id="_171"
            d="m1250 1250 852.4 1548.8-47.8 25.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#538aff',
            }}
          />
          <path
            id="_172"
            d="m1250 1250 814.2 1569.2-48.5 24.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#528aff',
            }}
          />
          <path
            id="_173"
            d="m1250 1250 775.4 1588.8-49 23.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#5189ff',
            }}
          />
          <path
            id="_174"
            d="m1250 1250 736.2 1607.3-49.6 22z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#5088ff',
            }}
          />
          <path
            id="_175"
            d="m1250 1250 696.5 1624.9-50.1 20.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4f88ff',
            }}
          />
          <path
            id="_176"
            d="m1250 1250 656.4 1641.5-50.6 19.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4e87ff',
            }}
          />
          <path
            id="_177"
            d="m1250 1250 616 1657.1-51.1 18.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4d86ff',
            }}
          />
          <path
            id="_178"
            d="m1250 1250 575.1 1671.7-51.5 17z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4c86ff',
            }}
          />
          <path
            id="_179"
            d="m1250 1250 533.9 1685.3-51.9 15.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4b85ff',
            }}
          />
          <path
            id="_180"
            d="m1250 1250 492.4 1697.9-52.3 14.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4a84ff',
            }}
          />
          <path
            id="_181"
            d="m1250 1250 450.6 1709.5-52.7 13.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4984ff',
            }}
          />
          <path
            id="_182"
            d="m1250 1250 408.5 1720.1-52.9 11.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4883ff',
            }}
          />
          <path
            id="_183"
            d="m1250 1250 366.1 1729.5-53.2 10.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4782ff',
            }}
          />
          <path
            id="_184"
            d="m1250 1250 323.6 1738-53.4 9.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4681ff',
            }}
          />
          <path
            id="_185"
            d="m1250 1250 280.8 1745.4-53.6 8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4581ff',
            }}
          />
          <path
            id="_186"
            d="m1250 1250 237.9 1751.8-53.8 6.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#4480ff',
            }}
          />
          <path
            id="_187"
            d="m1250 1250 194.8 1757.1-53.9 5.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#437fff',
            }}
          />
          <path
            id="_188"
            d="m1250 1250 151.7 1761.4-54.1 4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#427fff',
            }}
          />
          <path
            id="_189"
            d="m1250 1250 108.4 1764.6-54.2 2.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#417eff',
            }}
          />
          <path
            id="_190"
            d="m1250 1250 65.1 1766.7-54.3 1.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#407dff',
            }}
          />
          <path
            id="_191"
            d="m1250 1250 21.7 1767.7h-54.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3f7dff',
            }}
          />
          <path
            id="_192"
            d="m1250 1250-21.7 1767.7-54.2-1.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3e7cff',
            }}
          />
          <path
            id="_193"
            d="m1250 1250-65.1 1766.7-54.2-2.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3d7bff',
            }}
          />
          <path
            id="_194"
            d="m1250 1250-108.4 1764.6-54.1-4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3c7bff',
            }}
          />
          <path
            id="_195"
            d="m1250 1250-151.7 1761.4-54-5.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3b7aff',
            }}
          />
          <path
            id="_196"
            d="m1250 1250-194.9 1757.1-53.8-6.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3a79ff',
            }}
          />
          <path
            id="_197"
            d="m1250 1250-237.9 1751.8-53.7-8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3979ff',
            }}
          />
          <path
            id="_198"
            d="M1250 1250 969.1 2995.4l-53.4-9.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3878ff',
            }}
          />
          <path
            id="_199"
            d="M1250 1250 926.4 2988l-53.2-10.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3777ff',
            }}
          />
          <path
            id="_200"
            d="M1250 1250 883.9 2979.5l-53-11.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3677ff',
            }}
          />
          <path
            id="_201"
            d="M1250 1250 841.5 2970.1l-52.6-13.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3576ff',
            }}
          />
          <path
            id="_202"
            d="M1250 1250 799.4 2959.5l-52.3-14.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3475ff',
            }}
          />
          <path
            id="_203"
            d="M1250 1250 757.6 2947.9l-51.9-15.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3375ff',
            }}
          />
          <path
            id="_204"
            d="M1250 1250 716.1 2935.3l-51.5-17z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3274ff',
            }}
          />
          <path
            id="_205"
            d="M1250 1250 674.9 2921.7l-51.1-18.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3173ff',
            }}
          />
          <path
            id="_206"
            d="M1250 1250 634 2907.1l-50.6-19.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#3073ff',
            }}
          />
          <path
            id="_207"
            d="M1250 1250 593.5 2891.5l-50.1-20.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#2f72ff',
            }}
          />
          <path
            id="_208"
            d="M1250 1250 553.4 2874.9l-49.5-22z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#2e71ff',
            }}
          />
          <path
            id="_209"
            d="M1250 1250 513.8 2857.3l-49-23.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#2d71ff',
            }}
          />
          <path
            id="_210"
            d="M1250 1250 474.6 2838.8l-48.5-24.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#2c70ff',
            }}
          />
          <path
            id="_211"
            d="M1250 1250 435.8 2819.2l-47.8-25.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#2b6fff',
            }}
          />
          <path
            id="_212"
            d="M1250 1250 397.6 2798.8l-47.3-26.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#2a6eff',
            }}
          />
          <path
            id="_213"
            d="M1250 1250 359.8 2777.4l-46.5-27.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#296eff',
            }}
          />
          <path
            id="_214"
            d="M1250 1250 322.6 2755.1l-45.9-29z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#286dff',
            }}
          />
          <path
            id="_215"
            d="M1250 1250 285.9 2731.9l-45.1-30.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#276cff',
            }}
          />
          <path
            id="_216"
            d="M1250 1250 249.8 2707.8l-44.3-31.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#266cff',
            }}
          />
          <path
            id="_217"
            d="M1250 1250 214.4 2682.8l-43.6-32.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#256bff',
            }}
          />
          <path
            id="_218"
            d="M1250 1250 179.5 2657l-42.8-33.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#246aff',
            }}
          />
          <path
            id="_219"
            d="M1250 1250 145.3 2630.3l-41.9-34.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#236aff',
            }}
          />
          <path
            id="_220"
            d="M1250 1250 111.8 2602.7l-41.1-35.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#2269ff',
            }}
          />
          <path
            id="_221"
            d="M1250 1250 78.9 2574.4 38.7 2538z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#2168ff',
            }}
          />
          <path
            id="_222"
            d="M1250 1250 46.8 2545.3l-39.3-37.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#2068ff',
            }}
          />
          <path
            id="_223"
            d="M1250 1250 15.4 2515.3-23 2477z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1f67ff',
            }}
          />
          <path
            id="_224"
            d="M1250 1250-15.4 2484.6l-37.3-39.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1e66ff',
            }}
          />
          <path
            id="_225"
            d="M1250 1250-45.3 2453.2l-36.4-40.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1d66ff',
            }}
          />
          <path
            id="_226"
            d="M1250 1250-74.4 2421.1l-35.4-41.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1c65ff',
            }}
          />
          <path
            id="_227"
            d="M1250 1250-102.7 2388.2l-34.4-41.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1b64ff',
            }}
          />
          <path
            id="_228"
            d="M1250 1250-130.3 2354.7l-33.3-42.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1a64ff',
            }}
          />
          <path
            id="_229"
            d="M1250 1250-157 2320.5l-32.3-43.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1963ff',
            }}
          />
          <path
            id="_230"
            d="M1250 1250-182.8 2285.6l-31.2-44.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1862ff',
            }}
          />
          <path
            id="_231"
            d="M1250 1250-207.8 2250.2l-30.1-45.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1762ff',
            }}
          />
          <path
            id="_232"
            d="m1250 1250-1481.9 964.1-29-45.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1661ff',
            }}
          />
          <path
            id="_233"
            d="m1250 1250-1505.1 927.4-27.9-46.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1560ff',
            }}
          />
          <path
            id="_234"
            d="m1250 1250-1527.4 890.2-26.7-47.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#1460ff',
            }}
          />
          <path
            id="_235"
            d="m1250 1250-1548.8 852.4-25.6-47.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#135fff',
            }}
          />
          <path
            id="_236"
            d="m1250 1250-1569.3 814.2-24.3-48.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#125eff',
            }}
          />
          <path
            id="_237"
            d="m1250 1250-1588.8 775.4-23.1-49z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#115eff',
            }}
          />
          <path
            id="_238"
            d="m1250 1250-1607.3 736.2-22-49.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#105dff',
            }}
          />
          <path
            id="_239"
            d="m1250 1250-1624.9 696.5-20.8-50.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0f5cff',
            }}
          />
          <path
            id="_240"
            d="m1250 1250-1641.5 656.4-19.5-50.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0e5bff',
            }}
          />
          <path
            id="_241"
            d="m1250 1250-1657.1 616-18.3-51.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0d5bff',
            }}
          />
          <path
            id="_242"
            d="m1250 1250-1671.8 575.1-16.9-51.5z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0c5aff',
            }}
          />
          <path
            id="_243"
            d="m1250 1250-1685.4 533.9-15.7-51.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0b59ff',
            }}
          />
          <path
            id="_244"
            d="m1250 1250-1698 492.4-14.4-52.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0a59ff',
            }}
          />
          <path
            id="_245"
            d="m1250 1250-1709.5 450.6-13.2-52.7z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0958ff',
            }}
          />
          <path
            id="_246"
            d="m1250 1250-1720.1 408.5-11.8-52.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0857ff',
            }}
          />
          <path
            id="_247"
            d="m1250 1250-1729.6 366.1-10.5-53.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0757ff',
            }}
          />
          <path
            id="_248"
            d="m1250 1250-1738 323.6-9.3-53.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0656ff',
            }}
          />
          <path
            id="_249"
            d="m1250 1250-1745.4 280.8-8-53.6z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0555ff',
            }}
          />
          <path
            id="_250"
            d="m1250 1250-1751.8 237.9-6.6-53.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0455ff',
            }}
          />
          <path
            id="_251"
            d="m1250 1250-1757.1 194.8-5.3-53.9z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0354ff',
            }}
          />
          <path
            id="_252"
            d="m1250 1250-1761.4 151.7-4-54.1z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0253ff',
            }}
          />
          <path
            id="_253"
            d="m1250 1250-1764.6 108.4-2.6-54.2z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0153ff',
            }}
          />
          <path
            id="_254"
            d="m1250 1250-1766.7 65.1-1.3-54.3z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#0052ff',
            }}
          />
          <path
            id="_255"
            d="m1250 1250-1767.8 21.7v-43.4z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#fff',
            }}
          />
        </g>
      </g>
    </svg>
  ),
};
