import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [n, setN] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>GO ON. GIT!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          n < 100 &&
          <h1 className={styles.title}>
            GO ON, <a href="https://nextjs.org">GIT!</a>
          </h1>
        }
        {
          n >= 100 &&
          <h1 className={styles.title}>
            CONGRATULATIONS! <a style={{color:'green'}} href="https://nextjs.org">YOU WIN!</a>
          </h1>
        }
        

        <p className={styles.description}>
          {`Welcome to Bits 'n' Bytes.`}
        </p>

        <div className={styles.grid}>
          <a href="javascript:void(0)" onClick={() => (n < 100 && setN(n + 1)) && setColor(getRandomColor())} className={styles.card}>
            <h2>CLICK ME</h2>
            <p>I know you cannot resist</p>
          </a>
        </div>
        <div style={{fontSize:`${3 * n}px`, fontWeight: '900', color:n === 100 && 'green' || 'purple', height: '350px'}}>
          {n}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}