import techList from '@/utilities/constants/techList';
import { Box, Flex, Heading } from '@chakra-ui/react';
import styles from './tech.module.scss';

export default function Technologies() {
  return (
    <Box className={`${styles.technical}`}>
      <Box className={`${styles.carousel}`}>
        {techList.map((technology, key) => (
          <Flex className={`${styles.technology}`} key={key}>
            {technology.icon}
            <Heading as={'h3'} size={'md'}>
              {technology.name}
            </Heading>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
