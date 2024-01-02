import React from 'react';

import Header from '../components/Header';
import SoundContext from '../components/SoundContext';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundContext>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </SoundContext>
      </body>
    </html>
  );
}

export default RootLayout;
