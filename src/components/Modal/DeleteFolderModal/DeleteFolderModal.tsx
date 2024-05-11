'use client';

import { MouseEventHandler } from 'react';
import Modal from '../Modal';
import styles from './DeleteFolderModal.module.scss';

interface DeleteFolderModalProps {
  isOpen: boolean;
  handleCloseModal: MouseEventHandler;
  selectedFolder: string;
}

const DeleteFolderModal = ({
  isOpen,
  handleCloseModal,
  selectedFolder,
}: DeleteFolderModalProps) => {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className={styles.content}>
        <h2 className={styles.title}>폴더 삭제</h2>
        <p className={styles.selectedLink}>{selectedFolder}</p>
        <button className={styles.button}>삭제하기</button>
      </div>
    </Modal>
  );
};

export default DeleteFolderModal;
