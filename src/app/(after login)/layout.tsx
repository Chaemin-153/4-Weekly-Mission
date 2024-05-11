'use client';

import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import { ReactNode } from 'react';

type TChildren = {
  children: ReactNode;
};

function Layout({ children }: TChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
