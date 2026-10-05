'use client';
import { LoaderCircleIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

// ---------------------------------------------------------------
// THEME TOGGLE COMPONENT
// ---------------------------------------------------------------
export function ThemeToggle() {
  // ...
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState<boolean>(false);

  // ! https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  if (isClient && theme) {
    return (
      <Button
        variant="ghost"
        size="icon-lg"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? (
          <MoonIcon className="size-5.5" />
        ) : (
          <SunIcon className="size-5.5" />
        )}
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      aria-label="Loading theme"
      aria-busy={true}
      disabled
    >
      <LoaderCircleIcon className="size-5.5 animate-spin" />
    </Button>
  );
}
