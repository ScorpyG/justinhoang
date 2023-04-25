import { useColorModeValue } from '@chakra-ui/react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={19} height={24} xmlns="http://www.w3.org/2000/svg" {...props} fill={useColorModeValue('#2E2E2E', '#FFF')}>
    <path d="M13.333 18c.5-1.495 1.537-2.77 2.563-4.04.27-.333.541-.666.802-1.004 1.031-1.336 1.635-2.953 1.635-4.701C18.333 3.694 14.23 0 9.167 0 4.104 0 0 3.694 0 8.25c0 1.748.604 3.37 1.635 4.702.26.337.532.67.802 1.003C3.465 15.23 4.5 16.505 5 18h8.333Zm-4.166 6c2.302 0 4.166-1.678 4.166-3.75v-.75H5v.75C5 22.322 6.865 24 9.167 24ZM5 8.25c0 .412-.375.75-.833.75-.459 0-.834-.338-.834-.75C3.333 5.348 5.943 3 9.167 3c.458 0 .833.337.833.75 0 .412-.375.75-.833.75C6.865 4.5 5 6.178 5 8.25Z" />
  </svg>
);

export default SvgComponent;
