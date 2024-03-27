import Modal from '../Modal';
import styles from './AddFolderModal.module.scss';

const AddFolderModal = ({ isOpen, handleCloseModal }) => {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className={styles.content}>
        <h2 className={styles.title}>폴더 추가</h2>
        <input className={styles.input} placeholder="내용 입력" />
        <button className={styles.button}>추가하기</button>
      </div>
    </Modal>
  );
};

export default AddFolderModal;
