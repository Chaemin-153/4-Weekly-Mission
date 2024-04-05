import styles from './EmailInputForm.module.scss';

function EmailInputForm() {
  return <input className={styles.emailInput} placeholder="내용 입력" />;
}

export default EmailInputForm;
