import { type } from 'os';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type HobbyCardData = {
  color: Color;
  icon: JSX.Element;
  text: string;
};

export type ProjectCardData = {
  title: string;
  image: string;
  technologies: Array<string>;
  desc: string;
  repoLink: string;
  siteLink: string;
};
