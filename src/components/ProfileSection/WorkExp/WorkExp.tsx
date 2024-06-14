import Drawer from '@/components/Drawer/Drawer';
import { workHistoryData } from '@/utilities/constants/workHistoryData';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function WorkExp() {
  return (
    <Box>
      <Heading textAlign={'center'}>Experience</Heading>
      <Text textAlign={'center'} mb={6}>
        Where I&apos;ve been... professionally?
      </Text>

      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={8}
        maxW={'1200px'}
        margin={'auto'}
        padding={['0 20px', '0 15px', '0']}
      >
        {workHistoryData.map((workHistory, index) => (
          <Drawer key={index} {...workHistory}>
            {workHistory.children}
          </Drawer>
        ))}
      </Flex>
    </Box>
  );
}
