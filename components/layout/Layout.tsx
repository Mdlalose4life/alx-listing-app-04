import { ReactComponentProps } from '@/interfaces';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <>
      <Header/>
        <main className='min-h-screen mt-55'>
          {children}
        </main>
      <Footer/>
    </>
  );
};

export default Layout;