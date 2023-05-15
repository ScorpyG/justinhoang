import CSS from '../svgr/CSS';
import Code from '../svgr/Code';
import HTML from '../svgr/HTML';
import JavaScript from '../svgr/JavaScript';
import MongoDB from '../svgr/MongoDB';
import NextLogo from '../svgr/NextLogo';
import Node from '../svgr/Node';
import Python from '../svgr/Python';
import React from '../svgr/React';
import SASS from '../svgr/SASS';
import TypeScript from '../svgr/TypeScript';
import Vue from '../svgr/Vue';
import { TechnologyLogo } from '../types';

const techList: Array<TechnologyLogo> = [
  {
    name: 'TypeScript',
    icon: <TypeScript />,
  },
  {
    name: 'JavaScript',
    icon: <JavaScript />,
  },
  {
    name: 'React.js',
    icon: <React />,
  },
  {
    name: 'Next.js',
    icon: <NextLogo />,
  },
  {
    name: 'HTML',
    icon: <HTML />,
  },
  {
    name: 'CSS',
    icon: <CSS />,
  },
  {
    name: 'SASS',
    icon: <SASS />,
  },
  {
    name: 'Python',
    icon: <Python />,
  },
  {
    name: 'MongoDB',
    icon: <MongoDB />,
  },
  {
    name: 'Node.js',
    icon: <Node />,
  },
  {
    name: 'Vue.js',
    icon: <Vue />,
  },
  {
    name: 'C++',
    icon: <Code />,
  },
];

export default techList;
