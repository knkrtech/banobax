import React from 'react';
import { Link, useLocation } from '@remix-run/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="container fade-in">
      <header>
        <nav>
          <Link to="/" className={isActive('/')}>HOME</Link>
          <Link to="/about" className={isActive('/about')}>ABOUT</Link>
          <Link to="#services" className={isActive('#services')}>SERVICES</Link>
          <Link to="#contact" className={isActive('#contact')}>CONTACT</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Everything we do is for a sustainable future. 🌱</p>
        <p>&copy; 2024 BANOBA. All rights reserved.</p>
      </footer>
    </div>
  );
}