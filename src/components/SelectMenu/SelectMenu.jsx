import { useState } from 'react';
import styles from './SelectMenu.module.scss';
import DeleteLinkModal from '../Modal/DeleteLinkModal/DeleteLinkModal';

function SelectMenu({ isOpen, url }) {
  const [deleteLinkModalIsOpen, setDeleteLinkModalIsOpen] = useState(false);

  const toggleDeleteModal = () => {
    if (!deleteLinkModalIsOpen) {
      setDeleteLinkModalIsOpen(true);
    } else {
      setDeleteLinkModalIsOpen(false);
    }
  };

  return (
    <div
      className={styles.selectBox}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className={styles.delete} onClick={toggleDeleteModal}>
        삭제하기
      </div>
      <div className={styles.add}>폴더에 추가</div>
      <DeleteLinkModal
        isOpen={deleteLinkModalIsOpen}
        handleCloseModal={toggleDeleteModal}
        selectedName={url}
      />
    </div>
  );
}

export default SelectMenu;
