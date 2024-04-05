import logo from '@/public/icons/logo.svg';
import styles from './Header.module.scss';
import Profile from './Profile/Profile';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="로고" />
      </Link>
      <Profile />
    </header>
  );
}

export default Header;
