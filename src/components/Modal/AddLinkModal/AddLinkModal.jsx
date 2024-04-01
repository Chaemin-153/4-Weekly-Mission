import Modal from '../Modal';
import styles from './AddLinkModal.module.scss';
import checkIcon from '../../../images/check.svg';
import { useState } from 'react';

const AddLinkModal = ({ isOpen, handleCloseModal, categoryList, link }) => {
  const [selectedId, setSelectedId] = useState(categoryList[0]?.id || null);

  const handleCategoryClick = (categoryId) => {
    setSelectedId(categoryId === selectedId ? null : categoryId);
  };

  return (
    <Modal
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      isAddLinkModal="addLinkModal"
    >
      <div className={styles.content}>
        <h2 className={styles.title}>폴더에 추가</h2>
        <p className={styles.link}>{link}</p>
        <ul className={styles.category}>
          {categoryList &&
            categoryList.map((category) => (
              <li key={category.id}>
                <button
                  className={`${styles.categoryBtn} ${
                    category.id === selectedId ? styles.selected : ''
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <p className={styles.name}>{category.name}</p>
                  <p className={styles.count}>
                    {category.link?.count}개의 링크
                  </p>
                  {category.id === selectedId && (
                    <img
                      src={checkIcon}
                      alt="check icon"
                      className={styles.checkIcon}
                    />
                  )}
                </button>
              </li>
            ))}
        </ul>
        <button className={styles.button}>추가하기</button>
      </div>
    </Modal>
  );
};

export default AddLinkModal;
