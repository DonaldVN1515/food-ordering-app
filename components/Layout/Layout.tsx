import React from 'react'
import classNames from 'classnames/bind'

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import styles from './Layout.module.scss'

const cx = classNames.bind(styles)
function Layout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />

      <div className={cx('content')}>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
