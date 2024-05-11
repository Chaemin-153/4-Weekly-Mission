'use client';

import SearchBar from '@/components/SearchBar/SearchBar';
import TopContent from '@/components/Shared/TopContent/TopContent';
import SharedCards from '@/components/Shared/SharedCards/SharedCards';
import { useState } from 'react';
import SearchResult from '@/components/SearchBar/SearchResult/SearchResult';
import Head from 'next/head';

function SharedPage() {
  const [searchResult, setSearchResult] = useState<string>('');

  return (
    <>
      <Head>
        <title>Linkbrary - Shared</title>
      </Head>
      <TopContent />
      <SearchBar setSearchResult={setSearchResult} />
      <SearchResult searchResult={searchResult} />
      <SharedCards searchResult={searchResult} />
    </>
  );
}

export default SharedPage;
