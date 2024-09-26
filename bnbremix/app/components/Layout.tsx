import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container fade-in">
      {children}
      <footer>
        <p>Everything we do is for a sustainable future. 🌱</p>
        <p>&copy; 2024 BANOBA. All rights reserved.</p>
      </footer>
    </div>
  );
}