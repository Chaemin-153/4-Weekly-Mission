import { FormEvent } from 'react';
import searchIcon from '../../images/Search.svg';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <img src={searchIcon} alt="검색" />
      <input type="text" placeholder="링크를 검색해 보세요." />
    </form>
  );
}

export default SearchBar;
