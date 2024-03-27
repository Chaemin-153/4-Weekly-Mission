import React from 'react';
import defaultImg from '../../../../../images/no-image.svg';
import starImg from '../../../../../images/star.svg';
import kebabImg from '../../../../../images/kebab.svg';
import { updateStatus } from '../../../../../utils/cardUpdate';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

export default function Card({
  imageSource,
  createdAt,
  description,
  folder,
  url,
  id,
}) {
  const date = new Date(createdAt).toLocaleDateString();

  const dataStatus = updateStatus(createdAt);

  return (
    <Link className={styles.cardLink} to={url} key={id}>
      <div className={styles.card}>
        <img
          src={imageSource ? imageSource : defaultImg}
          className={styles.cardImg}
          alt="card"
        />
        {folder && (
          <img
            className={styles.star}
            src={starImg}
            alt="star"
            width={34}
            height={34}
          />
        )}
        <div className={styles.textContainer}>
          <span>{createdAt ? dataStatus : null}</span>
          <p>{description}</p>
          <p className={styles.dateNumber}>{date}</p>
          {folder && (
            <img
              className={styles.kebab}
              src={kebabImg}
              alt="star"
              width={21}
              height={17}
            />
          )}
        </div>
      </div>
    </Link>
  );
}
