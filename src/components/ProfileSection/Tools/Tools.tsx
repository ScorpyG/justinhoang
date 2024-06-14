import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import styles from './tools.module.scss';

export default function Tools() {
  return (
    <Flex flexDirection="column" className={`${styles.toolbar}`}>
      <Heading>Tools</Heading>
      <Text>My development toolkit</Text>
      <Flex className={`${styles.tools}`}>
        <Image src="/images/vscode.png" width={50} height={50} alt="vscode logo" />
        <Image src="/images/figma.png" width={30} height={50} alt="Figma logo" />
        <Image src="/images/git.png" width={50} height={50} alt="Git logo" />
        <Image
          src={useColorModeValue('/images/github-mark.png', '/images/github-mark-white.png')}
          width={50}
          height={50}
          alt="Github logo"
        />
        <Image src="/images/notion.png" width={50} height={50} alt="Notion logo" />
        <Image
          src={useColorModeValue('/images/apple.png', '/images/apple-white.png')}
          width={50}
          height={50}
          alt="Apple logo"
        />
        <Image src="/images/win10.png" width={50} height={50} alt="window logo" />
      </Flex>
    </Flex>
  );
}
