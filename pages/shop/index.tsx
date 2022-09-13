import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'

import Products from '~/components/Products'
import styles from '~/styles/Shop.module.scss'

const cx = classNames.bind(styles)
function Shop() {
  const [slidesData, setSlidesData] = useState([])

  useEffect(() => {
    const data = [
      {
        imageUrl: '/images/slide1.jpeg',
        createAt: 'dd/mm/yyyy',
        title: 'Lorem ipsum dolor ',
      },
      {
        imageUrl: '/images/slide2.jpeg',
        createAt: 'dd/mm/yyyy',
        title: 'Lorem ipsum dolor ',
      },
      {
        imageUrl: '/images/slide3.jpg',
        createAt: 'dd/mm/yyyy',
        title: 'Lorem ipsum dolor ',
      },
      {
        imageUrl: '/images/slide4.jpg',
        createAt: 'dd/mm/yyyy',
        title: 'Lorem ipsum dolor ',
      },
      {
        imageUrl: '/images/slide5.jpg',
        createAt: 'dd/mm/yyyy',
        title: 'Lorem ipsum dolor ',
      },
      {
        imageUrl: '/images/slide4.jpg',
        createAt: 'dd/mm/yyyy',
        title: 'Lorem ipsum dolor ',
      },
      {
        imageUrl: '/images/slide5.jpg',
        createAt: 'dd/mm/yyyy',
        title: 'Lorem ipsum dolor ',
      },
    ]

    setSlidesData(data)
  }, [])
  return <Products data={slidesData} />
}

export default Shop
