import classNames from 'classnames/bind'
import Link from 'next/link'

import Image from '~/components/Image'
import config from '~/config'
import styles from './Products.module.scss'

const cx = classNames.bind(styles)
function Product({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('products-title')}>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque est dicta at, rerum nulla
          hic fugit incidunt veritatis mollitia ipsa, nisi voluptatem ab sit itaque dignissimos
          harum, asperiores reiciendis sed!
        </p>
      </div>
      <div className={cx('products-list')}>
        {data.map((product, index) => (
          <div key={index} className={cx('item')}>
            <Link href={`${config.paths.shop}/id`}>
              <Image src={product.imageUrl} alt={product.title} className={cx('image')} />
            </Link>
            <div className={cx('content')}>
              <h4 className={cx('name')}>{product.title}</h4>
              <span className={cx('price')}>$2.5</span>
              <p className={cx('desc')}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque est dicta at, rerum
                nulla hic fugit incidunt veritatis mollitia ipsa, nisi voluptatem ab sit itaque
                dignissimos harum, asperiores reiciendis sed!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
