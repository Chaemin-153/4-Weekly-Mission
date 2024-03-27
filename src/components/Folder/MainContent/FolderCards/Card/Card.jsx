import React, { useRef, useState } from 'react';
import defaultImg from '../../../../../images/no-image.svg';
import starImg from '../../../../../images/star.svg';
import kebabImg from '../../../../../images/kebab.svg';
import { updateStatus } from '../../../../../utils/cardUpdate';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import SelectMenu from '../../../../SelectMenu/SelectMenu';

export default function Card({ imageSource, createdAt, description, url, id }) {
  const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false);
  const kebabRef = useRef();
  const date = new Date(createdAt).toLocaleDateString();
  const dataStatus = updateStatus(createdAt);

  const toggleSelectMenu = () => {
    if (!selectMenuIsOpen) {
      setSelectMenuIsOpen(true);
    } else {
      setSelectMenuIsOpen(false);
    }
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
        <p>{description}</p>
        <p className={styles.dateNumber}>{date}</p>
        <img
          className={styles.kebab}
          src={kebabImg}
          alt="star"
          width={21}
          height={17}
          onClick={toggleSelectMenu}
          ref={kebabRef}
        />
        <SelectMenu isOpen={selectMenuIsOpen} url={url} />
      </div>
    </div>
  );
}
