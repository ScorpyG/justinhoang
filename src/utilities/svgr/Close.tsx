import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={21} height={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.333 4.34a2.002 2.002 0 0 0-2.83-2.83l-6.578 6.585-6.584-6.578a2.002 2.002 0 0 0-2.83 2.83l6.584 6.578-6.578 6.584a2.002 2.002 0 0 0 2.83 2.83l6.578-6.584 6.584 6.578a2.002 2.002 0 0 0 2.83-2.83l-6.584-6.578 6.578-6.584Z" />
  </svg>
);

export default SvgComponent;
