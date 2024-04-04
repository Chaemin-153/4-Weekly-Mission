import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopContent from '../../components/Shared/TopContent/TopContent';
import SharedCards from '../../components/Shared/SharedCards/SharedCards';
import { useState } from 'react';
import SearchResult from '../../components/SearchBar/SearchResult/SearchResult';

function SharedPage() {
  const [searchResult, setSearchResult] = useState<string>('');

  return (
    <HelmetProvider>
      <Helmet>
        <title>Linkbrary - Shared</title>
      </Helmet>
      <TopContent />
      <SearchBar setSearchResult={setSearchResult} />
      <SearchResult searchResult={searchResult} />
      <SharedCards searchResult={searchResult} />
    </HelmetProvider>
  );
}

export default SharedPage;
