import { HobbyCardData } from '@/utilities/types';
import Tilt from 'react-parallax-tilt';
import styles from './card.module.scss';

export interface HobbyCardProps {
  hobbyData: HobbyCardData;
  handleClick?: () => void;
}

export default function HobbyCard(props: HobbyCardProps) {
  const { hobbyData } = props;

  return (
    <Tilt>
      <div className={`${styles.hobbyCard}`} style={{ borderColor: hobbyData.color }}>
        <div className={`${styles.icon}`} style={{ fill: hobbyData.color }}>
          {hobbyData.icon}
        </div>
        <p style={{ color: hobbyData.color }}>{hobbyData.text}</p>
      </div>
    </Tilt>
  );
}
