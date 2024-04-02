import noCardImg from '../../../../images/no-image.svg';
import styles from './Card.module.scss';

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
      <img
        src={imageSource || noCardImg}
        alt={title}
        className={styles.cardImg}
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
