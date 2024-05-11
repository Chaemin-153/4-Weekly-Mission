import EmailInputForm from '@/src/components/LoginInputForm/EmailInputForm/EmailInputForm';
import PasswordInputForm from '@/src/components/LoginInputForm/PasswordInputForm/PasswordInputForm';
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
