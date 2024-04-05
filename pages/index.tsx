import Head from 'next/head';
import logo from '@/public/icons/logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="description" content="Welcome Linkbrary!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo} />
      </Head>
      <div className="main">HOME PAGE!</div>
    </>
  );
}
