import { Icon, IconProps, useColorModeValue } from '@chakra-ui/react';

const PinIcon = (props: IconProps) => (
  <Icon {...props} fill={useColorModeValue('#2E2E2E', '#FFF')}>
    <path
      d="M16.852 39.101C20.859 34.073 30 21.885 30 15.04 30 6.736
      23.281 0 15 0 6.719 0 0 6.736 0 15.039 0 21.885 9.14 34.073
      13.148 39.1a2.357 2.357 0 0 0 3.704 0ZM15 10.026c1.326 0
      2.598.528 3.535 1.468a5.02 5.02 0 0 1 0 7.09 4.993 4.993
      0 0 1-7.07 0 5.02 5.02 0 0 1 0-7.09A4.993 4.993 0 0 1 15
      10.026Z"
    />
  </Icon>
);

export default PinIcon;
