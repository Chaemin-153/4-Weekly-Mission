import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import searchIcon from '../../images/Search.svg';
import closeIcon from '../../images/modalClose.svg';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  setSearchResult: Dispatch<SetStateAction<string>>;
}

function SearchBar({ setSearchResult }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSearchView = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchResult(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSearchReset = () => {
    setSearchResult('');
    setInputValue('');
  };

  return (
    <form className={styles.searchBar}>
      <img src={searchIcon} alt="검색" />
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        onChange={handleSearchView}
        value={inputValue}
      />
      <img src={closeIcon} alt="초기화" onClick={handleSearchReset} />
    </form>
  );
}

export default SearchBar;
