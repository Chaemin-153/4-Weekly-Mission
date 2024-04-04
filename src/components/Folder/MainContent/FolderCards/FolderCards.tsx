import Card from './Card/Card';
import styles from './FolderCards.module.scss';

interface FolderCardProps {
  id: number;
  image_source: string;
  created_at: string;
  description: string;
  url: string;
  title: string;
}

interface FolderProps {
  folder: FolderCardProps[];
  searchResult: string;
}

export const FolderCards = ({ folder, searchResult }: FolderProps) => {
  const isExistFolder = folder && folder.length > 0;

  return (
    <div className={`${styles.cardsContainer} ${styles.cardList}`}>
      {isExistFolder ? (
        folder
          .filter(
            (link) =>
              link.title?.includes(searchResult) ||
              link.description?.includes(searchResult) ||
              link.url.includes(searchResult)
          )
          .map(
            ({
              id,
              image_source,
              created_at,
              description,
              url,
            }: FolderCardProps) => (
              <Card
                id={id}
                imageSource={image_source}
                created_at={created_at}
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

//   return (
//     <div className={`${styles.cardsContainer} ${styles.cardList}`}>
//       {isExistFolder ? (
//         folder.map(
//           ({
//             id,
//             image_source,
//             created_at,
//             description,
//             url,
//           }: FolderCardProps) => (
//             <Card
//               id={id}
//               imageSource={image_source}
//               created_at={created_at}
//               description={description}
//               url={url}
//             />
//           )
//         )
//       ) : (
//         <div className={styles.noLink}>저장된 링크가 없습니다</div>
//       )}
//     </div>
//   );
// };

export default FolderCards;
