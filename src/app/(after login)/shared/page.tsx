'use client';

import SearchBar from '@/src/components/SearchBar/SearchBar';
import TopContent from '@/src/components/Shared/TopContent/TopContent';
import SharedCards from '@/src/components/Shared/SharedCards/SharedCards';
import { useState } from 'react';
import SearchResult from '@/src/components/SearchBar/SearchResult/SearchResult';

export default function SharedPage() {
  const [searchResult, setSearchResult] = useState<string>('');

  return (
    <>
      <TopContent />
      <SearchBar setSearchResult={setSearchResult} />
      <SearchResult searchResult={searchResult} />
      <SharedCards searchResult={searchResult} />
    </>
  );
}
