'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/icons/logo.svg';
import useFetchWithToken from '@/src/hooks/useFetchWithToken';
import { useEffect, useState } from 'react';
import { useUser } from '@/src/contexts/userContext';
import { useRouter } from 'next/navigation';
import styles from './SigninPage.module.scss';
import EmailInput from '@/src/components/Input/EmailInput';
import PasswordInput from '@/src/components/Input/PasswordInput';

export default function SignIn() {
  const { fetchWithToken } = useFetchWithToken();
  const { setUserId } = useUser();
  const router = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { email, password } = values;

    try {
      const responseData = await fetchWithToken(
        'https://bootcamp-api.codeit.kr/api/sign-in',
        'POST',
        {
          email,
          password,
        }
      );
      setUserId(responseData.user.id);
      console.log('로그인 후 받은 유저 ID:', responseData.user.id);
      localStorage.setItem('userId', responseData.user.id);
      localStorage.setItem('accessToken', responseData.accessToken);
      router.push('/folder');
    } catch (err: any) {
      // Error 객체에서 Message만 추출
      const errorMessage = err.toString().substr(7);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    const { email, password } = values;
    const isLoginValid =
      email.trim() !== '' &&
      password.trim() !== '' &&
      password.trim().length >= 8;
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
            회원이 아니신가요?
            <Link href="/signin">
              <span className={styles.signupLink}>회원 가입하기</span>
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
          <button
            className={styles.submitBtn}
            type="submit"
            disabled={!isBtnActive}
          >
            로그인
          </button>
        </form>
      </div>
    </>
  );
}
