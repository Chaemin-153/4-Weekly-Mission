import link from '@/public/icons/link.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AddLinkBar.module.scss';
import { FormEvent } from 'react';

function AddLinkBar() {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.addLinkBar} onSubmit={handleSearch}>
      <Image src={link} alt="link" />
      <input type="text" placeholder="링크를 추가해 보세요" />
      <Link href="/folder">
        <div className={styles.addBtn}>추가하기</div>
      </Link>
    </form>
  );
}

export default AddLinkBar;
