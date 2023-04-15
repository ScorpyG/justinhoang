import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import styles from './home.module.scss';

export default function Home() {
  // NO SSR
  const DynamicTypeWriter = dynamic(() => import('typewriter-effect'), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
      </Head>
      <main>
        <div className={styles.hero}>
          <div className={styles.bio}>
            <h2>Hi, I&apos;m</h2>
            <h1>Justin Hoang</h1>
            <p>
              I&apos;m a software developer based in Vancouver with a passion for technology from planning, design,
              write codes and all the way to solve real-life problems. Be able to create and learn along side an
              innovative team is something I always love.
            </p>
            <div className={styles.typewriter}>
              Current working with
              {
                <DynamicTypeWriter
                  options={{
                    cursor: '<',
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true,
                    strings: ['TypeScript', 'React.js', 'Next.js', 'GraphQL', 'MongoDB', 'ChakraUI', 'SASS'],
                  }}
                />
              }
            </div>
            <br />
            <Link href="/about">LEARN MORE</Link>
          </div>
          <div className={styles.model}></div>
        </div>
      </main>
    </>
  );
}
