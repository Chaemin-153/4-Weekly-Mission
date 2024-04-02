import link from '../../images/link.svg';
import { Link } from 'react-router-dom';
import styles from './AddLinkBar.module.scss';
import { FormEvent } from 'react';

function AddLinkBar() {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.addLinkBar} onSubmit={handleSearch}>
      <img src={link} alt="link" />
      <input type="text" placeholder="링크를 추가해 보세요" />
      <Link to="/folder">
        <div className={styles.addBtn}>추가하기</div>
      </Link>
    </form>
  );
}

export default AddLinkBar;
