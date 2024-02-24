'use client'
import Head from 'next/head'
import Header from '../../components/Header'
import Getserversideprops from '@/components/Getserversideprops';

export  function Search() {

  return (
    <div>
      <Head>
        <title>Search Result</title>
      </Head>
      <Header />
      <Getserversideprops/>
    </div>
  );
};

export default Search;
