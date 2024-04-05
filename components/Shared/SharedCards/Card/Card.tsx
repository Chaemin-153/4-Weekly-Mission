import noCardImg from '@/public/icons/no-image.svg';
import styles from './Card.module.scss';
import Image from 'next/image';

interface CardProps {
  imageSource: string;
  title: string;
  description: string;
  timePassed?: string;
  formattedDate?: string;
}

function Card({
  imageSource,
  title,
  timePassed,
  description,
  formattedDate,
}: CardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={imageSource || noCardImg}
        alt={title}
        className={styles.cardImg}
        width={1000}
        height={1000}
      />
      <div className={styles.textContainer}>
        <span>{timePassed}</span>
        <p>{description}</p>
        <p className={styles.dateNumber}>{formattedDate}</p>
      </div>
    </div>
  );
}

export default Card;
