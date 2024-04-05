import EmailInputForm from '@/components/LoginInputForm/EmailInputForm/EmailInputForm';
import PasswordInputForm from '@/components/LoginInputForm/PasswordInputForm/PasswordInputForm';
import Head from 'next/head';

function signin() {
  return (
    <>
      <Head>
        <title>Linkbrary - Signin</title>
      </Head>
      <EmailInputForm />
      <PasswordInputForm />
    </>
  );
}

export default signin;
