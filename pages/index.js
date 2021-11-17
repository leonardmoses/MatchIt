import Head from 'next/head'
import Link from 'next/link'
import styleSplash from "../styles/Splash.module.scss"

export default function Splash() {
  return (
    <div className={styleSplash.body}>
      <Head>
        <title>Match It</title>
      </Head>
      <main className={styleSplash.main}>
        <h1>Match It</h1>
        <Link href='/Home'><a className={styleSplash.rules}>Game Rules</a></Link>
        <Link href='/Cards'><a className={styleSplash.play}>Play</a></Link>
      </main>
    </div>
  )
}
