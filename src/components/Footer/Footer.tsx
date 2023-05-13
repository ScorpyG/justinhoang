import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Text, chakra, useColorModeValue } from '@chakra-ui/react';
import { formatInTimeZone } from 'date-fns-tz';
import { useEffect, useState } from 'react';
import { devCommunity, github, linkedin } from '../../utilities/constants/URLs';
import DEVIcon from '../../utilities/svgr/DEV';
import GithubIcon from '../../utilities/svgr/Github';
import LinkedInIcon from '../../utilities/svgr/LinkedIn';
import styles from './footer.module.scss';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const ChakraDEVIcon = chakra(DEVIcon);
  const ChakraLinkedInIcon = chakra(LinkedInIcon);
  const ChakraGithubIcon = chakra(GithubIcon);
  const colorStateForDarkMode = useColorModeValue('#2E2E2E', '#FFF');
  const colorStateForLightMode = useColorModeValue('#FFF', '#2E2E2E');

  function timeZoneAsString(date: string) {
    if (date) {
      return date.match(/\((.*)\)/); // This return an array
    }
  }

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  return (
    <Flex
      maxWidth={'1512px'}
      height={'80px'}
      mt={'10px'}
      mx={'auto'}
      padding={'0 20px'}
      justifyContent={'space-between'}
      className={styles.footerContainer}
      rowGap={'5px'}
    >
      <Text fontSize={['12px', '14px']} color={'#9c9c9c'}>
        &copy; {currentTime.getFullYear()} JUSTIN HOANG
      </Text>

      <Box fontSize={['12px', '14px']} color={'#9c9c9c'}>
        {`${formatInTimeZone(currentTime, 'America/Vancouver', 'h:mm:ss a')} | ${
          timeZoneAsString(currentTime.toString())?.[1]
        }`}
      </Box>

      <Flex className={styles.media} gap={['30px', '15px']}>
        <Link
          href={github}
          target="_blank"
          _hover={{
            transform: 'translateY(-3px)',
            bg: colorStateForDarkMode,
          }}
          role="group"
        >
          <ChakraGithubIcon fill={colorStateForDarkMode} _groupHover={{ fill: colorStateForLightMode }} />
        </Link>
        <Link
          href={linkedin}
          target="_blank"
          _hover={{
            transform: 'translateY(-3px)',
            bg: colorStateForDarkMode,
          }}
          role="group"
        >
          <ChakraLinkedInIcon fill={colorStateForDarkMode} _groupHover={{ fill: colorStateForLightMode }} />
        </Link>
        <Link
          href={devCommunity}
          target="_blank"
          _hover={{
            transform: 'translateY(-3px)',
            bg: colorStateForDarkMode,
          }}
          role="group"
        >
          <ChakraDEVIcon fill={colorStateForDarkMode} _groupHover={{ fill: colorStateForLightMode }} />
        </Link>
      </Flex>
    </Flex>
  );
}
