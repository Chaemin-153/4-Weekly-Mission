import Modal from '../Modal';
import styles from './EditFolderModal.module.scss';

const EditFolderModal = ({ isOpen, handleCloseModal, currentCategory }) => {
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
