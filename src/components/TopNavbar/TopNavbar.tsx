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
    <Flex justifyContent={'center'} alignItems={'center'} height={'80px'} padding={'0 30px'}>
      <Box className={styles.logo}>
        <Link href="/">
          <DarkLogo />
        </Link>
      </Box>

      <Spacer />

      <Menu closeOnSelect>
        <MenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Options"
          variant={'outline'}
          as={IconButton}
          icon={menuOpen ? <CloseIcon /> : <Hamburger />}
          border={'2px'}
          borderColor={'black'}
          borderRadius={'9px'}
        />

        <MenuList border={'2px'} borderColor={'black'} borderRadius={'9px'}>
          {routeUrls.map((route, index) => (
            <Link href={route.url} key={index}>
              <MenuItem icon={route.icon}>{route.pageName}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
}
