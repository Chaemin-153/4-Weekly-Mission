import noCardImg from '../../../images/no-image.svg';
import styles from './CardListItem.module.scss';

function CardListItem({
  imageSource,
  title,
  timePassed,
  description,
  formattedDate,
  handleImageError,
}) {
  return (
    <div className={styles.card}>
      <img
        src={imageSource || noCardImg}
        alt={title}
        className={styles.cardImg}
        onError={handleImageError}
      />
      <div className={styles.textContainer}>
        <span>{timePassed}</span>
        <p>{description}</p>
        <p className={styles.dateNumber}>{formattedDate}</p>
      </div>
    </div>
  );
}

export default CardListItem;
