import { Color } from '@/utilities/types';
import { Box, Text } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import styles from './card.module.scss';

export interface HobbyCardProps {
  hobbyData: HobbyCardData;
  handleClick?: () => void;
}

export type HobbyCardData = {
  color: Color;
  icon: JSX.Element;
  text: string;
};

export default function HobbyCard(props: HobbyCardProps) {
  const { hobbyData } = props;

  return (
    <Tilt>
      <Box className={`${styles.hobbyCard}`} padding="20px" borderRadius="3xl" border={`4px solid ${hobbyData.color}`}>
        <Box style={{ fill: hobbyData.color }} width="30px" mb="10px">
          {hobbyData.icon}
        </Box>
        <Text color={hobbyData.color}>{hobbyData.text}</Text>
      </Box>
    </Tilt>
  );
}
