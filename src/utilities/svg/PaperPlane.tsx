import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M23.35.263a1.5 1.5 0 0 1 .632 1.462l-3 19.496a1.503 1.503 0 0 1-2.063 1.153l-5.606-2.33-3.21 3.473A1.5 1.5 0 0 1 7.5 22.496v-3.918c0-.188.07-.366.196-.502l7.857-8.572a.744.744 0 0 0-.019-1.03.75.75 0 0 0-1.031-.033l-9.535 8.468L.83 14.838A1.493 1.493 0 0 1 0 13.54a1.51 1.51 0 0 1 .755-1.345l21-11.998a1.505 1.505 0 0 1 1.594.066Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
