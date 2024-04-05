import { useState } from 'react';
import AddFolderModal from '../../../Modal/AddFolderModal/AddFolderModal';
import styles from './FolderCategory.module.scss';
import styled from 'styled-components';

interface CategoryBtnProps {
  id: string;
  name: string;
}

interface FolderCategoryProps {
  category: any;
  currentCategory: string;
  handleCategoryButton: any;
}

const CategoryBtn = styled.div<{ checked: boolean }>`
  background-color: ${({ checked }) => (checked ? '#6d6afe' : '#ffffff')};
  color: ${({ checked }) => (checked ? '#ffffff' : '#111322')};
`;

function FolderCategory({
  category,
  currentCategory,
  handleCategoryButton,
}: FolderCategoryProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    if (!modalIsOpen) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  };

  return (
    <div className={styles.titleWrapper}>
      <div className={styles.categoryWrapper}>
        {category &&
          category.map(({ id, name }: CategoryBtnProps) => (
            <CategoryBtn
              className={styles.categoryBtn}
              id={id}
              key={id}
              checked={currentCategory === name ? true : false}
              onClick={handleCategoryButton}
            >
              {name}
            </CategoryBtn>
          ))}
      </div>

      <div className={styles.addBtnWrapper}>
        <p className={styles.addBtnText} onClick={toggleModal}>
          폴더 추가
        </p>
        <div className={styles.addBtnImage}></div>
      </div>
      <AddFolderModal isOpen={modalIsOpen} handleCloseModal={toggleModal} />
    </div>
  );
}

export default FolderCategory;
