import Card from '@/components/Card';
import { projectList } from '@/utilities/constants/cardData';
import Head from 'next/head';
import styles from './projects.module.scss';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
      </Head>
      <main>
        <div className={`${styles.container}`}>
          <div className={`${styles.header}`}>
            <h1>Projects</h1>
          </div>
          <div className={`${styles.showcase}`}>
            {projectList.length > 0 ? (
              projectList.map((project, index) => <Card type="ProjectCard" project={project} key={index} />)
            ) : (
              <h1>Sorry! No Projects Available</h1>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
