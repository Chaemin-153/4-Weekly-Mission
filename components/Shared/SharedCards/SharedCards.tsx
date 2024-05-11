'use client';

import Card from './Card/Card';
import useFetchCardsData from '../../../hooks/useFetchCardsData';
import Link from 'next/link';
import styles from './SharedCards.module.scss';

interface SharedCardsProps {
  searchResult: string;
}

interface FilteredCard {
  title: string;
  description: string;
  url: string;
}

function SharedCards({ searchResult }: SharedCardsProps): React.ReactElement {
  const cardsData = useFetchCardsData();

  return cardsData ? (
    <div className={styles.cardList}>
      <div className={styles.cardsContainer}>
        {cardsData
          .filter(
            (link: FilteredCard) =>
              link.title?.includes(searchResult) ||
              link.description?.includes(searchResult) ||
              link.url.includes(searchResult)
          )
          .map(
            ({
              url,
              id,
              imageSource,
              title,
              description,
              timePassed,
              formattedDate,
            }) => (
              <Link href={url} key={id}>
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
