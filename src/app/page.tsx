import { AboutMeSection } from '@/components/about-me-section';
import { ExperienceSection } from '@/components/experience-section';
import FadeIn from '@/components/fade-in';
import { PageNav } from '@/components/page-nav';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { SocialsContainer } from '@/components/socials-container';
import { cn } from 'cn';
import Link from 'next/link';

export default function HomePage() {
  // ...
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
        <FadeIn
          duration={100}
          className={cn(
            'lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between',
            'lg:max-h-screen lg:w-1/2 lg:py-24'
          )}
        >
          <header>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Justin Hoang
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
              Software Developer
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xs leading-relaxed">
              I build pixel-perfect, performant, and accessible web
              applications. Occasionally, I tinker with hardware and build
              robots.
            </p>

            <nav className="mt-12 hidden lg:block">
              <PageNav />
            </nav>
          </header>

          <SocialsContainer />
        </FadeIn>

        <main className="pt-24 lg:w-1/2 lg:py-24">
          <FadeIn duration={200}>
            <AboutMeSection />
          </FadeIn>

          <FadeIn duration={300}>
            <SkillsSection />
          </FadeIn>

          <FadeIn duration={400}>
            <ExperienceSection />
          </FadeIn>

          <FadeIn duration={500}>
            <ProjectsSection />
          </FadeIn>

          <FadeIn duration={600} className="px-4">
            <p className="text-muted-foreground text-sm">
              Built with{' '}
              <Link
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Next.js (opens in a new tab)"
                className={cn(
                  'font-semibold underline-offset-4 hover:underline',
                  'hover:text-foreground transition-colors duration-200'
                )}
              >
                Next.js
              </Link>
              ,{' '}
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TailwindCSS (opens in a new tab)"
                className={cn(
                  'font-semibold underline-offset-4 hover:underline',
                  'hover:text-foreground transition-colors duration-200'
                )}
              >
                TailwindCSS
              </Link>
              ,{' '}
              <Link
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Shadcn UI (opens in a new tab)"
                className={cn(
                  'font-semibold underline-offset-4 hover:underline',
                  'hover:text-foreground transition-colors duration-200'
                )}
              >
                Shadcn UI
              </Link>{' '}
              and ❤️ by Justin Hoang
            </p>
          </FadeIn>
        </main>
      </div>
    </div>
  );
}
