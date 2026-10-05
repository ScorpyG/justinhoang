'use client';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { buttonVariants } from './ui/button';

const SOCIAL_LINKS = [
  {
    name: 'Github',
    url: 'https://github.com/ScorpyG',
    icon: IconBrandGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/justin-gia-hoang/',
    icon: IconBrandLinkedin,
  },
] as const;

// ---------------------------------------------------------------
// SOCIALS CONTAINER COMPONENT
// ---------------------------------------------------------------
export function SocialsContainer() {
  // ...
  return (
    <ul
      className="flex items-center justify-start gap-2 pt-6 md:pt-0"
      aria-label="Social media"
    >
      {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
        <li key={`${name}-link`}>
          <Link
            href={url}
            target="_blank"
            // ...
            className={buttonVariants({
              variant: 'ghost',
              size: 'icon-lg',
            })}
          >
            <Icon className="size-5.5" />
          </Link>
        </li>
      ))}

      <li key="theme-toggle-button">
        <ThemeToggle />
      </li>
    </ul>
  );
}
