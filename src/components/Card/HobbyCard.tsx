import { Color } from '@/utilities/types';
import { Box, Card, Text } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';

export interface HobbyCardProps {
  hobbyData: HobbyCardData;
  handleClick?: () => void;
}

export interface HobbyCardData {
  color: Color;
  icon: JSX.Element;
  text: string;
}

export default function HobbyCard(props: HobbyCardProps) {
  const { hobbyData } = props;

  return (
    <Tilt>
      <Card padding="20px" borderRadius="3xl" border={'4px'} borderColor={hobbyData.color} maxW="2xs" height="xs">
        <Box style={{ fill: hobbyData.color }} width="30px" mb="10px">
          {hobbyData.icon}
        </Box>
        <Text color={hobbyData.color} textAlign={'left'}>
          {hobbyData.text}
        </Text>
      </Card>
    </Tilt>
  );
}
