import classNames from 'classnames/bind'
import React from 'react'
import Image from '~/components/Image'
import images from '~/public/images'

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)
function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('about')}>
        <Image src={images.logo} className={cx('image')} />
        <div className={cx('col')}>
          <h6>About us</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum ad labore non
            voluptate voluptatibus mollitia maiores, doloremque fugiat molestias eaque deserunt,
            soluta ducimus, est optio architecto dolorum quam unde.
          </p>
        </div>
      </div>
      <div className={cx('row')}>
        <ol className={cx('col')}>
          <h6>Services</h6>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
        </ol>
        <ol className={cx('col')}>
          <h6>for users</h6>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
        </ol>
        <ol className={cx('col')}>
          <h6>more pages</h6>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
        </ol>
        <ol className={cx('col')}>
          <h6>more pages</h6>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
          <li className={cx('col-item')}>Lorem ipsum dolor sit amet.</li>
        </ol>
      </div>
      <div className={cx('copyright')}>
        <h6>© Profile 2022. Design by DONALDVN</h6>
      </div>
    </div>
  )
}

export default Footer
