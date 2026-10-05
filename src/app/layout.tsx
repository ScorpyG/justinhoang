import { Toaster } from '@/components/ui/toast';
import { ThemeProvider } from '@/contexts/theme-provider';
import { cn } from 'cn';
import { type Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
// ...
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Justin H | Portfolio',
  metadataBase: new URL('https://justinhoang.me'),
  description:
    'Justin Hoang is a software developer who design and builds scalable and performant web applications.',
  icons: [
    {
      rel: 'icon',
      url: '/brand-dark.svg',
      sizes: '<generated>',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      url: '/brand-light.svg',
      sizes: '<generated>',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  // ...
  return (
    <html
      lang="en"
      className={cn(
        'h-full overscroll-none scroll-smooth',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable
      )}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
