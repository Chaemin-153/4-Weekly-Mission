import styles from './Modal.module.scss';
import modalClose from '../../images/modalClose.svg';

function Modal({ children, isOpen, handleCloseModal }) {
  return (
    <div
      className={styles.backdrop}
      onClick={handleCloseModal}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleCloseModal}>
          <img src={modalClose} alt="close" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
