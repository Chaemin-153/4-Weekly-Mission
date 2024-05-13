import { InputHTMLAttributes, useState } from 'react';
import Image from 'next/image';
import visiblePasswordIcon from '@/public/icons/eye-off.svg';
import invisiblePasswordIcon from '@/public/icons/eye-on.svg';
import styles from './ConfirmPasswordInput.module.scss';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  labelName: string;
}

export default function ConfirmPasswordInput({
  labelName,
  error,
  errorMessage,
  ...props
}: PasswordInputProps) {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const passwordType = isPasswordShow ? 'text' : 'password';

  const handleTogglePassword = () => {
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <label className={styles.label}>
      {labelName}
      <input
        {...props}
        className={`${styles.input} ${error && styles.error}`}
        type={passwordType}
      />
      {error && <div className={styles.errorMessage}>{errorMessage}</div>}
      <button
        className={styles.toggleBtn}
        type="button"
        onClick={handleTogglePassword}
      >
        {isPasswordShow ? (
          <Image
            src={invisiblePasswordIcon}
            alt="eye-on"
            width={16}
            height={16}
          />
        ) : (
          <Image
            src={visiblePasswordIcon}
            alt="eye-off"
            width={16}
            height={16}
          />
        )}
      </button>
    </label>
  );
}
