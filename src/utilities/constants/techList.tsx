import JavaScript from "../svg/JavaScript";
import TypeScript from "../svg/TypeScript";
import React from "../svg/React";
import HTML from "../svg/HTML";
import CSS from "../svg/CSS";
import SASS from "../svg/SASS";
import Python from "../svg/Python";
import Database from "../svg/Database";
import Vue from "../svg/Vue";
import Code from "../svg/Code";
import Node from "../svg/Node";
import Next from "../svg/Next";

export type TechnologyLogo = {
  name: string;
  icon: JSX.Element;
}

const techList = [
  {
    name: 'TypeScript',
    icon: <TypeScript/> 
  },
  {
    name: "JavaScript",
    icon: <JavaScript/>,
  },
  {
    name: 'React.js',
    icon: <React/>
  },
  {
    name: 'Next.js',
    icon: <Next/>
  },
  {
    name: 'HTML',
    icon: <HTML/>
  },
  {
    name: 'CSS',
    icon: <CSS/>
  },
  {
    name: 'SASS',
    icon: <SASS/>
  },
  {
    name: 'Python',
    icon: <Python/>
  },
  {
    name: 'MongoDB',
    icon: <Database/>
  },
  {
    name: 'Node.js',
    icon: <Node/>
  },
  {
    name: 'Vue.js',
    icon: <Vue/>
  },
  {
    name: 'C++',
    icon: <Code/>
  },
];

export default techList;