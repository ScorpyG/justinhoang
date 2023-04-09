import { ProjectCardData } from '@/utilities/types';
import Link from 'next/link';
import styles from './card.module.scss';

export interface ProjectCardProps {
  project: ProjectCardData;
  handleClick?: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <div className={`${styles.projectCard}`}>
      <Link href={project.siteLink} target="_blank">
        <img src={project.image} alt="Project GIF" />
      </Link>

      <div className={`${styles.projectInfo}`}>
        <Link href={project.repoLink} target="_blank">
          <h2>{project.title}</h2>
        </Link>

        <h3>{project.technologies.join(' | ').toString()}</h3>
        <p>{project.desc}</p>
      </div>
    </div>
  );
}
