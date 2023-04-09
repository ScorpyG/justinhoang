import HobbyCard, { HobbyCardProps } from './HobbyCard';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

export interface HobbyCardPropsDefault extends HobbyCardProps {
  type: 'HobbyCard';
}

export interface ProjectCardPropsDefault extends ProjectCardProps {
  type: 'ProjectCard';
}

export type CardDefaultProp = (HobbyCardPropsDefault | ProjectCardPropsDefault) & {
  key: number;
  useModal?: boolean;
};

export default function Card(props: CardDefaultProp) {
  const { type } = props;
  let card = null;

  if (type === 'HobbyCard') {
    card = <HobbyCard {...props} />;
  } else if (type === 'ProjectCard') {
    card = <ProjectCard {...props} />;
  }

  return card;
}
