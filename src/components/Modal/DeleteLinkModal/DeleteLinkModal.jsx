import Modal from '../Modal';
import styles from './DeleteLinkModal.module.scss';

const DeleteLinkModal = ({ isOpen, handleCloseModal, selectedName }) => {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className={styles.content}>
        <h2 className={styles.title}>링크 삭제</h2>
        <p className={styles.selectedName}>{selectedName}</p>
        <button className={styles.button}>삭제하기</button>
      </div>
    </Modal>
  );
};

export default DeleteLinkModal;
