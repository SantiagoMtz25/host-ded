// hooks/useDarkMode.ts
"use client";

import { useEffect, useState } from 'react';

/**
 * 
 * The setter function is never used, however, if a theme toggle button is added to the UI, 
 * it can be used to toggle the dark mode.
 * 
 * @returns a state tuple with a boolean value and a setter function to toggle the dark mode
 */
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [isDarkMode, setIsDarkMode] as const;
}
