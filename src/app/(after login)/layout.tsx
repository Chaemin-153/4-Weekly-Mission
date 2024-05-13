'use client';

import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      router.push('/signin');
    }
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
