import { routeUrls } from '@/utilities/constants/URLs';
import LightLogo from '@/utilities/svgr/LightLogo';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import DarkLogo from '../../utilities/svgr/DarkLogo';
import styles from './topnavbar.module.scss';

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      maxW={'1512px'}
      height={'80px'}
      padding={'0 20px'}
      margin={'auto'}
    >
      <Box className={styles.logo}>
        <Link href="/">{useColorModeValue(<DarkLogo />, <LightLogo />)}</Link>
      </Box>

      <Spacer />
      <IconButton
        aria-label="Theme Toggle"
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
        variant={'outline'}
        border={'2px'}
        borderRadius={'9px'}
        h={'45px'}
        w={'45px'}
        mr={'10px'}
      />

      <Menu closeOnSelect autoSelect={false}>
        <MenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu Options"
          variant={'outline'}
          as={IconButton}
          icon={menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          border={'2px'}
          borderRadius={'9px'}
          h={'45px'}
          w={'45px'}
        />

        <MenuList border={'2px'} borderColor={'black'} borderRadius={'9px'}>
          {routeUrls.map((route, index) => (
            <Link href={route.url} key={index} onClick={() => setMenuOpen(!menuOpen)}>
              <MenuItem icon={route.icon}>{route.pageName}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
}
