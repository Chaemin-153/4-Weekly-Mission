import shareImg from '@/public/icons/share.svg';
import renameImg from '@/public/icons/rename.svg';
import deleteImg from '@/public/icons/delete.svg';
import styles from './FolderTitle.module.scss';
import EditFolderModal from '../../../Modal/EditFolderModal/EditFolderModal';
import { ReactElement, useState } from 'react';
import DeleteFolderModal from '../../../Modal/DeleteFolderModal/DeleteFolderModal';
import Image from 'next/image';

interface FolderTitleProps {
  currentCategory: string;
}

export const FolderTitle = ({
  currentCategory,
}: FolderTitleProps): ReactElement => {
  const [editFolderModalIsOpen, setEditFolderModalIsOpen] = useState(false);
  const [deleteFolderModalIsOpen, setDeleteFolderModalIsOpen] = useState(false);

  const toggleEditFolderModal = () => {
    if (!editFolderModalIsOpen) {
      setEditFolderModalIsOpen(true);
    } else {
      setEditFolderModalIsOpen(false);
    }
  };

  const toggleDeleteFolderModal = () => {
    if (!deleteFolderModalIsOpen) {
      setDeleteFolderModalIsOpen(true);
    } else {
      setDeleteFolderModalIsOpen(false);
    }
  };

  return (
    <div className={styles.titleWrapper}>
      <p className={styles.categoryName}>{currentCategory}</p>
      {currentCategory !== '전체' && (
        <div className={styles.folderOptionWrapper}>
          <div className={styles.optionBtnWrapper}>
            <Image
              className={styles.optionBtnImg}
              src={shareImg}
              alt="shareImg"
            />
            <p className={styles.optionBtnText}>공유</p>
          </div>
          <div
            className={styles.optionBtnWrapper}
            onClick={toggleEditFolderModal}
          >
            <Image
              className={styles.optionBtnImg}
              src={renameImg}
              alt="renameImg"
            />
            <p className={styles.optionBtnText}>이름 변경</p>
          </div>
          <EditFolderModal
            isOpen={editFolderModalIsOpen}
            handleCloseModal={toggleEditFolderModal}
            currentCategory={currentCategory}
          />
          <div
            className={styles.optionBtnWrapper}
            onClick={toggleDeleteFolderModal}
          >
            <Image
              className={styles.optionBtnImg}
              src={deleteImg}
              alt="deleteImg"
            />
            <p className={styles.optionBtnText}>삭제</p>
          </div>
          <DeleteFolderModal
            isOpen={deleteFolderModalIsOpen}
            handleCloseModal={toggleDeleteFolderModal}
            selectedFolder={currentCategory}
          />
        </div>
      )}
    </div>
  );
};
