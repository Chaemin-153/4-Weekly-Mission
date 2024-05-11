'use client';

import { ChangeEvent, useState } from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import useFetchFolderCategoryData from '../../../hooks/useFetchFolderCategoryData';
import useFetchFolderCardsData from '../../../hooks/useFetchFolderCardsData';
import FolderCategory from './FolderCategory/FolderCategory';
import { FolderTitle } from './FolderTitle/FolderTitle';
import { FolderCards } from './FolderCards/FolderCards';
import SearchResult from '../../SearchBar/SearchResult/SearchResult';

function MainContent() {
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [folderId, setFolderId] = useState('0');
  const [searchResult, setSearchResult] = useState<string>('');

  const folderCategory = useFetchFolderCategoryData();
  const folderCards = useFetchFolderCardsData(folderId);

  const handleCategoryButton = (e: ChangeEvent<HTMLElement>): void => {
    setCurrentCategory(e.target.innerText);
    setFolderId(e.target.id);
  };

  return (
    <>
      <SearchBar setSearchResult={setSearchResult} />
      <SearchResult searchResult={searchResult} />
      {folderCategory ? (
        <>
          <FolderCategory
            category={[{ name: '전체', id: '0' }, ...folderCategory]}
            currentCategory={currentCategory}
            handleCategoryButton={handleCategoryButton}
          />
          <FolderTitle currentCategory={currentCategory} />
          {folderCards && (
            <FolderCards folder={folderCards} searchResult={searchResult} />
          )}
        </>
      ) : (
        <div>저장된 링크가 없습니다.</div>
      )}
    </>
  );
}

export default MainContent;
