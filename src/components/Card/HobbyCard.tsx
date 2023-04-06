import { Color } from '@/utilities/type/types';
import styles from './card.module.scss';

export type HobbyCardProps = {
  color: Color;
  icon: JSX.Element;
  text: string;
};

export default function HobbyCard(props: HobbyCardProps) {
  return (
    <div className={`${styles.hobbyCard}`} style={{ borderColor: props.color }}>
      <div className={`${styles.icon}`} style={{ fill: props.color }}>
        {props.icon}
      </div>
      <p style={{ color: props.color }}>{props.text}</p>
    </div>
  );
}
