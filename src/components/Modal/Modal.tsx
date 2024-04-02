import styles from './Modal.module.scss';
import modalClose from '../../images/modalClose.svg';
import { MouseEventHandler, ReactElement, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleCloseModal: MouseEventHandler;
  isAddLinkModal?: string;
}

function Modal({
  children,
  isOpen,
  handleCloseModal,
  isAddLinkModal = '',
}: ModalProps): ReactElement {
  return (
    <div
      className={styles.backdrop}
      onClick={handleCloseModal}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div
        className={`${styles.content} ${styles[isAddLinkModal]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={handleCloseModal}>
          <img src={modalClose} alt="close" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
