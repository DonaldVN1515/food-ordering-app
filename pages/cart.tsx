import React from 'react'
import classNames from 'classnames/bind'

import styles from '~/styles/Cart.module.scss'
import Image from '~/components/Image'
import config from '~/config'
import Payment from '~/components/Payment'

const cx = classNames.bind(styles)

function Cart() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('infor')}>
        <table className={cx('table')}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody className={cx('list')}>
            <tr className={cx('item')}>
              <td className={cx('infor-image')}>
                <Image src="/images/slide4.jpg" alt="title" className={cx('image')} />
              </td>
              <td className={cx('infor-name')}>Lorem ipsum.</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>$2.00</td>
              <td>9.00</td>
              <td>$18.00</td>
            </tr>
            <tr className={cx('item')}>
              <td className={cx('infor-image')}>
                <Image src="/images/slide4.jpg" alt="title" className={cx('image')} />
              </td>
              <td className={cx('infor-name')}>Lorem ipsum.</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>$2.00</td>
              <td>9.00</td>
              <td>$18.00</td>
            </tr>
            <tr className={cx('item')}>
              <td className={cx('infor-image')}>
                <Image src="/images/slide4.jpg" alt="title" className={cx('image')} />
              </td>
              <td className={cx('infor-name')}>Lorem ipsum.</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>$2.00</td>
              <td>9.00</td>
              <td>$18.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment */}
      <Payment href={`${config.paths.orders}/id`} label="checkout now" />
    </div>
  )
}

export default Cart
