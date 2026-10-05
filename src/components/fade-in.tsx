'use client';
import { cn } from 'cn';
import { useEffect, useRef, useState } from 'react';

interface FadeInProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

// ---------------------------------------------------------------
// FADE IN WRAPPER COMPONENT
// ---------------------------------------------------------------
export default function FadeIn({
  children,
  duration = 0,
  className,
  ...props
}: FadeInProps) {
  // ...
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setTimeout(() => {
            setIsMounted(true);
          }, duration);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [duration]);

  return (
    <div
      {...props}
      ref={elementRef}
      className={cn(
        // Scroll anchoring follows this translate and shifts the page on refresh.
        '[overflow-anchor:none] transition-all duration-700 ease-out',
        isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
