import Image from 'next/image'
import styles from './page.module.css'
import News from './News/page'

export default function Home() {
  return (
    <>
        <News setProgress='setProgress' pagesize={5} key="science" country="us" category="general"/>

    </>
  )
}
