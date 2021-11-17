import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Splash() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Match It</title>
      </Head>
      <main className={styles.main}>
        <h1>Match It</h1>
        <Link href='/Home'><a>Play</a></Link>
      </main>

    </div>
  )
}
