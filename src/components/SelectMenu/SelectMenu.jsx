import { useRef, useState } from 'react';
import styles from './SelectMenu.module.scss';
import DeleteLinkModal from '../Modal/DeleteLinkModal/DeleteLinkModal';
import AddLinkModal from '../Modal/AddLinkModal/AddLinkModal';
import useClickOutside from '../../hooks/useClickOutside';
import useFetchFolderCategoryData from '../../hooks/useFetchFolderCategoryData';

function SelectMenu({ isOpen, url, handleClose }) {
  const [deleteLinkModalIsOpen, setDeleteLinkModalIsOpen] = useState(false);
  const [addLinkModalIsOpen, setAddLinkModalIsOpen] = useState(false);
  const selectMenuRef = useRef();

  const categoryList = useFetchFolderCategoryData();

  const toggleDeleteModal = () => {
    if (!deleteLinkModalIsOpen) {
      setDeleteLinkModalIsOpen(true);
    } else {
      setDeleteLinkModalIsOpen(false);
    }
  };

  const toggleAddModal = () => {
    if (!addLinkModalIsOpen) {
      setAddLinkModalIsOpen(true);
    } else {
      setAddLinkModalIsOpen(false);
    }
  };

  useClickOutside(selectMenuRef, handleClose);

  return isOpen ? (
    <div className={styles.selectBox} ref={selectMenuRef}>
      <div className={styles.delete} onClick={toggleDeleteModal}>
        삭제하기
      </div>
      <DeleteLinkModal
        isOpen={deleteLinkModalIsOpen}
        handleCloseModal={toggleDeleteModal}
        selectedLink={url}
      />
      <div className={styles.add} onClick={toggleAddModal}>
        폴더에 추가
      </div>
      <AddLinkModal
        isOpen={addLinkModalIsOpen}
        handleCloseModal={toggleAddModal}
        categoryList={categoryList}
        link={url}
      />
    </div>
  ) : (
    <></>
  );
}

export default SelectMenu;
