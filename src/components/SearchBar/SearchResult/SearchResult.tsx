import styles from './SearchResult.module.scss';

interface SearchResultProps {
  searchResult: string;
}

function SearchResult({ searchResult }: SearchResultProps) {
  return (
    <>
      {searchResult ? (
        <p className={styles.searchText}>
          <span className={styles.boldText}>{searchResult}</span>로 검색한
          결과입니다
        </p>
      ) : (
        <></>
      )}
    </>
  );
}

export default SearchResult;
