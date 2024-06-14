import Card from '@/components/Card';
import { hobbyList } from '@/utilities/constants/cardData';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Hobbies() {
  return (
    <Box textAlign="center" mb={'8'}>
      <Heading>Hobbies</Heading>
      <Text>A bit of...insights!</Text>

      <Flex gap="20px" mt="8" flexWrap={'wrap'} justifyContent={'center'}>
        {hobbyList.length > 0 ? (
          hobbyList?.map((hobby, index) => <Card type="HobbyCard" key={index} hobbyData={hobby} />)
        ) : (
          <h1>No Card Available!</h1>
        )}
      </Flex>
    </Box>
  );
}
