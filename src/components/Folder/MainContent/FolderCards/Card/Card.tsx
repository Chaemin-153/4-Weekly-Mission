import { useRef, useState } from 'react';
import defaultImg from '../../../../../images/no-image.svg';
import starImg from '../../../../../images/star.svg';
import kebabImg from '../../../../../images/kebab.svg';
import { updateStatus } from '../../../../../utils/cardUpdate';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import SelectMenu from '../../../../SelectMenu/SelectMenu';

interface FolderCardProps {
  id: number;
  imageSource: string;
  createdAt: string;
  description: string;
  url: string;
}

export default function Card({
  id,
  imageSource,
  createdAt,
  description,
  url,
}: FolderCardProps) {
  const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false);
  const kebabRef = useRef<HTMLImageElement>(null);

  const date = new Date(createdAt).toLocaleDateString();
  const dataStatus = updateStatus(createdAt);

  const openSelectMenu = () => {
    setSelectMenuIsOpen(true);
  };

  const closeSelectMenu = () => {
    setSelectMenuIsOpen(false);
  };

  return (
    <div className={styles.card}>
      <Link className={styles.cardLink} to={url} key={id}>
        <img
          src={imageSource ? imageSource : defaultImg}
          className={styles.cardImg}
          alt="card"
        />
      </Link>
      <img
        className={styles.star}
        src={starImg}
        alt="star"
        width={34}
        height={34}
      />
      <div className={styles.textContainer}>
        <span>{createdAt ? dataStatus : null}</span>
        {description ? (
          <p>{description}</p>
        ) : (
          <p>No Description No Description No Description No Description</p>
        )}
        <p className={styles.dateNumber}>{date}</p>
        <img
          className={styles.kebab}
          src={kebabImg}
          alt="star"
          width={21}
          height={17}
          onClick={openSelectMenu}
          ref={kebabRef}
        />
        <SelectMenu
          isOpen={selectMenuIsOpen}
          url={url}
          handleClose={closeSelectMenu}
        />
      </div>
    </div>
  );
}
