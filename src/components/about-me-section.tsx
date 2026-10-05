import { cn } from 'cn';
import Link from 'next/link';

// ---------------------------------------------------------------
// ABOUT ME SECTION COMPONENT
// ---------------------------------------------------------------
export function AboutMeSection() {
  // ...
  return (
    <section
      id="about-me"
      className="mb-8 scroll-mt-8 md:mb-12 lg:mb-24 lg:scroll-mt-12"
      aria-label="About me"
    >
      <div
        className={cn(
          'sticky top-0 z-20 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:opacity-0',
          '-mx-6 mb-4 px-6 py-5 md:-mx-12 md:px-12 lg:mx-auto lg:px-0 lg:py-0',
          'w-screen lg:w-full'
        )}
      >
        <h2 className="text-sm font-bold tracking-widest uppercase lg:sr-only">
          About
        </h2>
      </div>

      <div className="flex flex-col items-start justify-start gap-4">
        <p className="text-muted-foreground leading-relaxed">
          Hello, I&apos;m Justin, and I love design and building things.
          I&apos;m a software developer with expertise in building scalable and
          efficient web applications using modern technologies. I like to
          challenge my own creativity, problem-solving, planning, and
          organization.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Currently, I&apos;m going to{' '}
          <Link
            href="https://www.bcit.ca/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="BCIT website (opens in a new tab)"
            className={cn(
              'font-semibold underline-offset-4 hover:underline',
              'hover:text-foreground transition-colors duration-200'
            )}
          >
            BCIT
          </Link>{' '}
          to get my Electrical License and working toward a Red Seal
          qualification to work as an electrician. Cuz y not?
        </p>

        <p className="text-muted-foreground leading-relaxed">
          In my spare time, you can find me on the treadmill, or building some
          robots with my 3D printer.
        </p>
      </div>
    </section>
  );
}
