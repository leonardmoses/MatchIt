import Head from 'next/head'
import Link from 'next/link'
import styleSplash from "../styles/Splash.module.scss"
import Image from "next/image"
// import image from "../public/spade.png"

export default function Splash() {
  return (
    <div className={styleSplash.body}>
      <Head>
        <title>Match It</title>
      </Head>
      <main className={styleSplash.main}>
        <h1>Match It</h1>
        <a className={styleSplash.rules}><Link href='/Home'>Game Rules</Link></a>
        <a className={styleSplash.play}><Link href='/Cards'>Play</Link></a>
      </main>
    </div>
  )
}
