'use client';

import Modal from '../Modal';
import styles from './DeleteLinkModal.module.scss';

interface DeleteLinkModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  selectedLink: string;
}

const DeleteLinkModal = ({
  isOpen,
  handleCloseModal,
  selectedLink,
}: DeleteLinkModalProps) => {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className={styles.content}>
        <h2 className={styles.title}>링크 삭제</h2>
        <p className={styles.selectedLink}>{selectedLink}</p>
        <button className={styles.button}>삭제하기</button>
      </div>
    </Modal>
  );
};

export default DeleteLinkModal;
