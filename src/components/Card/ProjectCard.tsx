import { ProjectCardData } from '@/utilities/type/types';
import styles from './card.module.scss';

export interface ProjectCardProps {
  project: ProjectCardData;
  handleClick?: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return <div className={`${styles.projectCard}`}></div>;
}
