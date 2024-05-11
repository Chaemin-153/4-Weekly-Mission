'use client';

import styles from './EmailInputForm.module.scss';

function EmailInputForm() {
  return (
    <input
      className={styles.emailInput}
      type="email"
      placeholder="이메일 입력"
      required
    />
  );
}

export default EmailInputForm;
