import Head from 'next/head'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'

import styles from '~/styles/Home.module.scss'
import Slides from '~/components/Slides'

const cx = classNames.bind(styles)

export default function Home() {
  const [slidesData, setSlidesData] = useState([])

  useEffect(() => {
    const data = [
      {
        imageUrl: '/images/slide1.jpeg',
        createAt: 'dd/mm/yyyy',
        title: 'title',
      },
      {
        imageUrl: '/images/slide2.jpeg',
        createAt: 'dd/mm/yyyy',
        title: 'title',
      },
      {
        imageUrl: '/images/slide3.jpg',
        createAt: 'dd/mm/yyyy',
        title: 'title',
      },
      {
        imageUrl: '/images/slide4.jpg',
        createAt: 'dd/mm/yyyy',
        title: 'title',
      },
      {
        imageUrl: '/images/slide5.jpg',
        createAt: 'dd/mm/yyyy',
        title: 'title',
      },
    ]

    setSlidesData(data)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Food Ordering | DonaldVN</title>
        <meta name="description" content="Generated by DonaldVN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={cx('content')}>
        <Slides data={slidesData} />
      </main>
    </div>
  )
}