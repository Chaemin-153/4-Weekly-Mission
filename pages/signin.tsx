import EmailInputForm from '@/components/LoginInputForm/EmailInputForm/EmailInputForm';
import Head from 'next/head';

function signin() {
  return (
    <>
      <Head>
        <title>Linkbrary - Signin</title>
      </Head>
      <EmailInputForm />
    </>
  );
}

export default signin;
