'use client';

import Image from 'next/image';
import styles from './PasswordInputForm.module.scss';
import showPasswordIcon from '@/public/icons/eye-off.svg';
import { MouseEvent, useRef, useState } from 'react';

function PasswordInputForm() {
  const [isVisible, setIsVisible] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function togglePasswordVisible(e: MouseEvent) {
    if (isVisible) {
      setIsVisible(false);
      if (passwordInputRef.current) {
        passwordInputRef.current.type = 'password';
      }
    } else {
      setIsVisible(true);
      if (passwordInputRef.current) {
        passwordInputRef.current.type = 'text';
      }
    }
  }

  return (
    <div className={styles.passwordInputWrapper}>
      <input
        className={styles.passwordInput}
        ref={passwordInputRef}
        type="password"
        placeholder="비밀번호 입력"
        required
      />
      <Image
        className={styles.showPassword}
        src={showPasswordIcon}
        alt="show-pw"
        onClick={togglePasswordVisible}
      />
    </div>
  );
}

export default PasswordInputForm;
