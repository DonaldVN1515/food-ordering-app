import classNames from 'classnames/bind'
import React from 'react'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)
function Button({ leftIcon, rightIcon, priman }) {
  return <div className={cx('wrapper')}>Button</div>
}

export default Button
