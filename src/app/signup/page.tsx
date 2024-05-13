'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/icons/logo.svg';
import useFetchWithToken from '@/src/hooks/useFetchWithToken';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SignupPage.module.scss';
import EmailInput from '@/src/components/Input/EmailInput';
import PasswordInput from '@/src/components/Input/PasswordInput';
import ConfirmPasswordInput from '@/src/components/Input/ConfirmPasswordInput';

export default function SignIn() {
  const { fetchWithToken } = useFetchWithToken();
  const router = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = values;

    try {
      await fetchWithToken(
        'https://bootcamp-api.codeit.kr/api/sign-up',
        'POST',
        {
          email,
          password,
        }
      );
      router.push('/folder');
    } catch (err: any) {
      // Error 객체에서 Message만 추출
      const errorMessage = err.toString().substr(7);
      console.log(errorMessage);
    }
  };

  // 비밀번호 확인 focus시, 동일한지 확인
  const handleFocusConfirmPassword = () => {
    const { password, confirmPassword } = values;
    if (password === confirmPassword) {
      setIsConfirmPasswordError(false);
    } else {
      setIsConfirmPasswordError(true);
    }
  };

  // 비밀번호 확인 focus out시, 에러 메시지 없애기
  const handleBlurConfirmPassword = () => {
    setIsConfirmPasswordError(false);
  };

  useEffect(() => {
    const { email, password, confirmPassword } = values;
    const isLoginValid =
      email.trim() !== '' &&
      password.trim() !== '' &&
      password.trim().length >= 8 &&
      password === confirmPassword;
    setIsBtnActive(isLoginValid);

    // 이메일 형식 확인
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!emailRegex.test(email) && email.trim().length > 0) {
      setIsEmailError(true);
      setIsBtnActive(false);
    } else {
      setIsEmailError(false);
    }

    // 비밀번호 8자 이하 확인
    if (password.trim().length < 8 && password.trim().length > 0) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
  }, [values]);

  return (
    <>
      <Head>
        <title>Linkbrary - Signin</title>
      </Head>
      <div className={styles.mainContents}>
        <div className={styles.topContents}>
          <Image
            className={styles.logo}
            src={logo}
            alt="Linkbrary Logo"
            width={210}
          />
          <p className={styles.confirmMessage}>
            이미 회원이신가요?
            <Link href="/signin">
              <span className={styles.signupLink}>로그인 하기</span>
            </Link>
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <EmailInput
            labelName="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            name="email"
            onChange={handleChange}
            error={isEmailError}
            errorMessage="이메일 형식으로 작성해주세요."
            required
          />
          <PasswordInput
            labelName="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            onChange={handleChange}
            error={isPasswordError}
            errorMessage="비밀번호를 8자 이상 입력해주세요"
            required
          />
          <ConfirmPasswordInput
            labelName="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            name="confirmPassword"
            onChange={handleChange}
            onFocus={handleFocusConfirmPassword}
            onBlur={handleBlurConfirmPassword}
            error={isConfirmPasswordError}
            errorMessage="비밀번호가 일치하지 않습니다"
            required
          />
          <button
            className={styles.submitBtn}
            type="submit"
            disabled={!isBtnActive}
          >
            회원가입
          </button>
        </form>
      </div>
    </>
  );
}
