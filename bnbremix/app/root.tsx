import { useEffect } from 'react';
import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';
import { LanguageProvider } from './contexts/LanguageContext';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: '/styles/global.css' },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora&display=swap' },
  { 
    rel: 'preload', 
    href: '/fonts/FuturaCondensedBold.otf', 
    as: 'font', 
    type: 'font/otf', 
    crossOrigin: 'anonymous' 
  },
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
];

export default function App() {
  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LanguageProvider>
          <Outlet />
        </LanguageProvider>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
