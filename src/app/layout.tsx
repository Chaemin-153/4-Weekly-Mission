import React from 'react';
import '@/src/styles/globals.scss';
import { UserProvider } from '@/src/contexts/userContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
