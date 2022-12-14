import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { useState } from 'react'

import styles from './Slides.module.scss'
import Image from '~/components/Image'
const cx = classNames.bind(styles)

function Slides({ data }) {
  const [index, setIndex] = useState(0)

  const handleArrow = (direction: string) => {
    if (direction === 'left') {
      setIndex(index !== 0 ? index - 1 : data.length - 1)
    }
    if (direction === 'right') {
      setIndex(index !== data.length - 1 ? index + 1 : 0)
    }
  }
  const handleMoveDot = (dotIndex) => {
    setIndex(dotIndex)
  }

  return (
    <div className={cx('wrapper')}>
      {/* ARROW LEFT */}

      <div className={cx('arrow', 'arrow-left')} onClick={() => handleArrow('left')}>
        <i className={cx('arrow-icon')}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </i>
      </div>
      {/* SLIDES */}
      <div
        className={cx('slides')}
        style={{ transform: `translateX(${-100 * index}vw)`, width: `${100 * data.length}vw` }}
      >
        {data.map((slide, index) => (
          <Image key={index} src={slide.imageUrl} alt={slide.title} className={cx('image')} />
        ))}
      </div>
      {/* ARROW RIGHT */}
      <div className={cx('arrow', 'arrow-right')} onClick={() => handleArrow('right')}>
        <i className={cx('arrow-icon')}>
          <FontAwesomeIcon icon={faChevronRight} />
        </i>
      </div>

      {/* Dots */}
      <div className={cx('dots')}>
        {Array.from({ length: data.length }).map((item, dotIndex) => (
          <span
            key={dotIndex}
            onClick={() => handleMoveDot(dotIndex)}
            className={cx('dot', index === dotIndex ? 'active' : '')}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Slides
