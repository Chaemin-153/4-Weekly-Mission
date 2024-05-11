'use client';

import TopContent from '@/src/components/Folder/TopContent/TopContent';
import MainContent from '@/src/components/Folder/MainContent/MainContent';
import Head from 'next/head';

function FolderPage() {
  return (
    <>
      <Head>
        <title>Linkbrary - Folder</title>
      </Head>
      <TopContent />
      <MainContent />
    </>
  );
}

export default FolderPage;
