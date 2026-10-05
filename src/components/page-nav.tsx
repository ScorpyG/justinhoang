import { cn } from 'cn';
import Link from 'next/link';

const LINKS = [
  {
    label: 'About',
    href: '#about-me',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#work-experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
  },
] as const;

// ---------------------------------------------------------------
// PAGE NAV COMPONENT
// ---------------------------------------------------------------
export function PageNav() {
  // ...
  return (
    <ul className="w-max space-y-4">
      {LINKS.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            className={cn(
              'group active:text-foreground',
              'flex items-center gap-4'
            )}
            target={href.includes('.pdf') ? '_blank' : undefined}
            rel={href.includes('.pdf') ? 'noreferrer noopener' : undefined}
          >
            <span
              className={cn(
                'bg-muted-foreground group-hover:bg-foreground h-px w-8 group-hover:w-16 group-focus-visible:w-16',
                'transition-all duration-200 motion-reduce:transition-none'
              )}
            />
            <span
              className={cn(
                'text-muted-foreground group-hover:text-foreground text-xs font-black tracking-widest uppercase',
                'transition-colors duration-200'
              )}
            >
              {label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
