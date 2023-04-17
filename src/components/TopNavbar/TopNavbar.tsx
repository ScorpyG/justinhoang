import { routeUrls } from '@/utilities/constants/URLs';
import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import CloseIcon from '../../utilities/svgr/Close';
import DarkLogo from '../../utilities/svgr/DarkLogo';
import Hamburger from '../../utilities/svgr/Hamburger';
import styles from './topnavbar.module.scss';

export default function TopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <Link href="/">
          <DarkLogo />
        </Link>
      </Box>

      <Spacer />

      <Menu closeOnSelect autoSelect={false}>
        <MenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Options"
          variant={'outline'}
          as={IconButton}
          icon={menuOpen ? <CloseIcon /> : <Hamburger />}
          border={'2px'}
          borderColor={'black'}
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
