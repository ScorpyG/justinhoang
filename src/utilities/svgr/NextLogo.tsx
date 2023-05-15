import { useColorModeValue } from '@chakra-ui/react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 180 180" fill={useColorModeValue('#2E2E2E', '#FFF')} xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
    >
      <circle cx={90} cy={90} r={90} fill="#000" />
    </mask>
    <g mask="url(#a)">
      <circle cx={90} cy={90} r={87} fill="none" stroke={useColorModeValue('#2E2E2E', '#FFF')} strokeWidth={6} />
      <path
        d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325Z"
        fill="url(#b)"
      />
      <path fill="url(#c)" d="M115 54h12v72h-12z" />
    </g>
    <defs>
      <linearGradient id="b" x1={109} y1={116.5} x2={144.5} y2={160.5} gradientUnits="userSpaceOnUse">
        <stop stopColor={useColorModeValue('#2E2E2E', '#FFF')} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="c" x1={121} y1={54} x2={120.799} y2={106.875} gradientUnits="userSpaceOnUse">
        <stop stopColor={useColorModeValue('#2E2E2E', '#FFF')} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
