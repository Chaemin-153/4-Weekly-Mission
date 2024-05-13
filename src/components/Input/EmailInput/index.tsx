import { InputHTMLAttributes } from 'react';
import styles from './EmailInput.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  labelName: string;
}

export default function EmailInput({
  labelName,
  error,
  errorMessage,
  className,
  ...props
}: InputProps) {
  return (
    <label className={`${styles.label} ${className}`}>
      <span>{labelName}</span>
      <input
        {...props}
        className={`${styles.input} ${error && styles.error}`}
      />
      {error && <div className={styles.errorMessage}>{errorMessage}</div>}
    </label>
  );
}
