import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { formatInTimeZone } from 'date-fns-tz';
import { useEffect, useState } from 'react';
import { devCommunity, github, linkedin } from '../../utilities/constants/URLs';
import DEVIcon from '../../utilities/svgr/DEV';
import GithubIcon from '../../utilities/svgr/Github';
import LinkedInIcon from '../../utilities/svgr/LinkedIn';
import styles from './footer.module.scss';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

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
      mx={'auto'}
      padding={'0 20px'}
      justifyContent={'space-between'}
      className={styles.footerContainer}
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
        <Link href={github} target="_blank" _hover={{ transform: 'translateY(-3px)' }}>
          <GithubIcon fill={useColorModeValue('#2E2E2E', '#FFF')} />
        </Link>
        <Link href={linkedin} target="_blank" _hover={{ transform: 'translateY(-3px)' }}>
          <LinkedInIcon fill={useColorModeValue('#2E2E2E', '#FFF')} />
        </Link>
        <Link href={devCommunity} target="_blank" _hover={{ transform: 'translateY(-3px)' }}>
          <DEVIcon fill={useColorModeValue('#2E2E2E', '#FFF')} />
        </Link>
      </Flex>
    </Flex>
  );
}
