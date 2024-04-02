import Card from './Card/Card';
import useFetchCardsData from '../../../hooks/useFetchCardsData';
import { Link } from 'react-router-dom';
import styles from './SharedCards.module.scss';

function SharedCards(): React.ReactElement {
  const cardsData = useFetchCardsData();

  return cardsData ? (
    <div className={styles.cardList}>
      <div className={styles.cardsContainer}>
        {cardsData.map(
          ({
            url,
            id,
            imageSource,
            title,
            description,
            timePassed,
            formattedDate,
          }) => (
            <Link to={url} key={id}>
              <Card
                imageSource={imageSource}
                title={title}
                timePassed={timePassed}
                description={description}
                formattedDate={formattedDate}
              />
            </Link>
          )
        )}
      </div>
    </div>
  ) : (
    <h1>데이터가 없습니다</h1>
  );
}

export default SharedCards;
