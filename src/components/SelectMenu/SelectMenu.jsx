import { useRef, useState } from 'react';
import styles from './SelectMenu.module.scss';
import DeleteLinkModal from '../Modal/DeleteLinkModal/DeleteLinkModal';
import useClickOutside from '../../hooks/useClickOutside';

function SelectMenu({ isOpen, url, handleClose }) {
  const [deleteLinkModalIsOpen, setDeleteLinkModalIsOpen] = useState(false);
  const selectMenuRef = useRef();

  const toggleDeleteModal = () => {
    if (!deleteLinkModalIsOpen) {
      setDeleteLinkModalIsOpen(true);
    } else {
      setDeleteLinkModalIsOpen(false);
    }
  };

  useClickOutside(selectMenuRef, handleClose);

  return isOpen ? (
    <div className={styles.selectBox} ref={selectMenuRef}>
      <div className={styles.delete} onClick={toggleDeleteModal}>
        삭제하기
      </div>
      <div className={styles.add}>폴더에 추가</div>
      <DeleteLinkModal
        isOpen={deleteLinkModalIsOpen}
        handleCloseModal={toggleDeleteModal}
        selectedLink={url}
      />
    </div>
  ) : (
    <></>
  );
}

export default SelectMenu;
