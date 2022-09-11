import classNames from 'classnames/bind'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import styles from './Header.module.scss'
import images from '~/public/images'
import Image from '~/components/Image'

const cx = classNames.bind(styles)
function Header() {
  return (
    <div className={cx('wrapper')}>
      {/* CALL */}
      <div className={cx('call')}>
        <i className={cx('call-icon')}>
          <FontAwesomeIcon icon={faPhone} />
        </i>
        <div className={cx('call-number')}>
          <span>order now!</span>
          <span>012 345 678</span>
        </div>
      </div>

      {/* NAV */}
      <div className={cx('nav')}>
        <Link href="/">
          <a className={cx('nav-item')}>home</a>
        </Link>
        <Link href="/products">
          <a className={cx('nav-item')}>products</a>
        </Link>
        <Link href="/menu">
          <a className={cx('nav-item')}>menu</a>
        </Link>
        <Link href="/">
          <a className={cx('nav-item')}>
            <Image src={images.logo} alt="Logo" className={cx('image')} />
          </a>
        </Link>
        <Link href="/events">
          <a className={cx('nav-item')}>events</a>
        </Link>
        <Link href="/bog">
          <a className={cx('nav-item')}>bog</a>
        </Link>
        <Link href="/contact">
          <a className={cx('nav-item')}>contact</a>
        </Link>
      </div>

      {/* CART */}
      <div className={cx('cart')}>
        <i className={cx('cart-icon')}>
          <FontAwesomeIcon icon={faCartShopping} />
        </i>
        <span className={cx('cart-counter')}>9</span>
      </div>
    </div>
  )
}

export default Header
