'use client';

import { MouseEventHandler } from 'react';
import Modal from '../Modal';
import styles from './EditFolderModal.module.scss';

interface EditFolderModalProps {
  isOpen: boolean;
  handleCloseModal: MouseEventHandler;
  currentCategory: string;
}

const EditFolderModal = ({
  isOpen,
  handleCloseModal,
  currentCategory,
}: EditFolderModalProps) => {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className={styles.content}>
        <h2 className={styles.title}>폴더 이름 변경</h2>
        <input className={styles.input} placeholder={currentCategory} />
        <button className={styles.button}>변경하기</button>
      </div>
    </Modal>
  );
};

export default EditFolderModal;
