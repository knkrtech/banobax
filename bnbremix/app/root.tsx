import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';

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
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
