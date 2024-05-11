'use client';

import { useRef, useState } from 'react';
import styles from './Card.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import defaultImg from '@/public/icons/no-image.svg';
import starImg from '@/public/icons/star.svg';
import kebabImg from '@/public/icons/kebab.svg';
import { updateStatus } from '../../../../../utils/cardUpdate';
import SelectMenu from '../../../../SelectMenu/SelectMenu';

interface FolderCardProps {
  id: number;
  imageSource: string;
  created_at: string;
  description: string;
  url: string;
}

export default function Card({
  id,
  imageSource,
  created_at,
  description,
  url,
}: FolderCardProps) {
  const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false);
  const kebabRef = useRef<HTMLImageElement>(null);

  const date = new Date(created_at).toLocaleDateString();
  const dataStatus = updateStatus(created_at);

  const openSelectMenu = () => {
    setSelectMenuIsOpen(true);
  };

  const closeSelectMenu = () => {
    setSelectMenuIsOpen(false);
  };

  return (
    <div className={styles.card}>
      <Link className={styles.cardLink} href={url} key={id}>
        <Image
          src={imageSource ? imageSource : defaultImg}
          className={styles.cardImg}
          alt="card"
          width={1000}
          height={1000}
        />
      </Link>
      <Image
        className={styles.star}
        src={starImg}
        alt="star"
        width={34}
        height={34}
      />
      <div className={styles.textContainer}>
        <span>{created_at ? dataStatus : null}</span>
        {description ? (
          <p>{description}</p>
        ) : (
          <p>No Description No Description No Description No Description</p>
        )}
        <p className={styles.dateNumber}>{date}</p>
        <Image
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
