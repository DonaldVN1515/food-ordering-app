import classNames from 'classnames/bind'
import { useState, forwardRef } from 'react'
import images from '~/public/images'

import styles from './Image.module.scss'
const cx = classNames.bind(styles)

function Image({ fallback: customFallback = images.noImage, src, alt, className, ...props }, ref) {
  const [fallback, setFallback] = useState('')

  const handleError = () => {
    setFallback(customFallback)
  }

  return (
    <div ref={ref} className={cx('wrapper', className)}>
      <img
        src={fallback || src}
        alt={alt}
        className={cx('image')}
        onError={handleError}
        {...props}
      />
    </div>
  )
}

export default forwardRef(Image)
