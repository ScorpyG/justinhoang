import { Icon, IconProps, useColorModeValue } from '@chakra-ui/react';

const ProfileIcon = (props: IconProps) => (
  <Icon {...props} fill={useColorModeValue('#2E2E2E', '#FFF')}>
    <path
      d="M10 12c1.515 0 2.969-.632 4.04-1.757A6.156
      6.156 0 0 0 15.715 6a6.156 6.156 0 0 0-1.673-4.243C12.969.632
      11.515 0 10 0 8.484 0 7.031.632 5.96 1.757A6.156 6.156 0 0 0
      4.285 6c0 1.591.602 3.117 1.673 4.243C7.031 11.368 8.484 12
      10 12Zm-2.04 2.25C3.563 14.25 0 17.99 0 22.608 0 23.377.594
      24 1.326 24h17.348c.732 0 1.326-.623 1.326-1.392
      0-4.617-3.563-8.358-7.96-8.358H7.96Z"
    />
  </Icon>
);

export default ProfileIcon;
