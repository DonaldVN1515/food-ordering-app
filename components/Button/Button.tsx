import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import Link from 'next/link'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)
function Button({
  // leftIcon,
  // rightIcon,
  primary = false,
  className,
  onClick,
  children,
  href,
  ...passProps
}) {
  const props = {
    onClick,
    href,
    ...passProps,
  }

  // let Comp = 'button'

  // if (href) {
  //   props.href = href
  //   Comp = Link
  // }

  const classes = cx('wapper', {
    [className]: className,
    primary,
    // outline,
    // text,
  })
  return (
    <button className={classes} {...props}>
      <span className={cx('title')}>{children}</span>
    </button>
  )
}

export default Button
