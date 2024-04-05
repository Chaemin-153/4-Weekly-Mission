import styles from './Footer.module.scss';
import facebookIcon from '@/public/icons/facebook.svg';
import twitterIcon from '@/public/icons/twitter.svg';
import youtubeIcon from '@/public/icons/youtube.svg';
import instagramIcon from '@/public/icons/instagram.svg';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>@codeit - 2023</p>
      <div className={styles.footerLink}>
        <Link href="/privacy">
          <p className={styles.footerPrivacy}>Privacy Policy</p>
        </Link>
        <Link href="/FAQ">
          <p className={styles.footerFaq}>FAQ</p>
        </Link>
      </div>
      <div className={styles.footIcon}>
        <Link href="https://facebook.com/">
          <Image src={facebookIcon} alt="페이스북" />
        </Link>
        <Link href="https://twitter.com/">
          <Image src={twitterIcon} alt="트위터" />
        </Link>
        <Link href="https://youtube.com/">
          <Image src={youtubeIcon} alt="유튜브" />
        </Link>
        <Link href="https://instagram.com/">
          <Image src={instagramIcon} alt="인스타그램" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
