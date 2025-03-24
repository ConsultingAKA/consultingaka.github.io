'use client';

import { useEffect } from 'react';

export default function ClientCssLoader() {
  useEffect(() => {
    // Force a re-render of styles on the client
    document.body.classList.add('tailwind-loaded');
    return () => {
      document.body.classList.remove('tailwind-loaded');
    };
  }, []);

  return null;
}