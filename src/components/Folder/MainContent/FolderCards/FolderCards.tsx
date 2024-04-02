import Card from './Card/Card';
import styles from './FolderCards.module.scss';

interface FolderCardProps {
  id: number;
  imageSource: string;
  createdAt: string;
  description: string;
  url: string;
}

interface FolderProps {
  folder: FolderCardProps[];
}

export const FolderCards = ({ folder }: FolderProps) => {
  const isExistFolder = folder && folder.length > 0;

  return (
    <div className={`${styles.cardsContainer} ${styles.cardList}`}>
      {isExistFolder ? (
        folder.map(
          ({
            id,
            imageSource,
            createdAt,
            description,
            url,
          }: FolderCardProps) => (
            <Card
              id={id}
              imageSource={imageSource}
              createdAt={createdAt}
              description={description}
              url={url}
            />
          )
        )
      ) : (
        <div className={styles.noLink}>저장된 링크가 없습니다</div>
      )}
    </div>
  );
};

export default FolderCards;
