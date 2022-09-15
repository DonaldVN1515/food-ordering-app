import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import styles from '~/styles/Order.module.scss'
import config from '~/config'
import Payment from '~/components/Payment'
import Image from '~/components/Image'
import images from '~/public/images'
const cx = classNames.bind(styles)
function Order() {
  const orderProgress = [
    {
      imageUrl: images.orderProgress1,
      label: 'Payment',
    },
    {
      imageUrl: images.orderProgress2,
      label: 'preparing',
    },
    {
      imageUrl: images.orderProgress3,
      label: 'on the way',
    },
    {
      imageUrl: images.orderProgress4,
      label: 'delivered',
    },
  ]
  const status = 0

  const statusClass = (index: Number) => {
    if (index.valueOf() - status < 1) return 'progress-done'
    if (index.valueOf() - status === 1) return 'progress-in'
    if (index.valueOf() - status > 1) return 'progress-undone'
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('order')}>
        <div className={cx('order-infor')}>
          <table className={cx('order-table')}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cx('order-id')}>Lorem ipsum dolor sit amet.</td>
                <td className={cx('order-customer')}>Lorem ipsum dolor sit amet.</td>
                <td className={cx('order-address')}>Lorem ipsum dolor sit amet.</td>
                <td className={cx('order-total')}>Lorem ipsum dolor sit amet.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={cx('order-progress')}>
          {orderProgress.map((progress, index) => (
            <div key={index} className={cx('progress-item', statusClass(index))}>
              <Image src={progress.imageUrl} className={cx('progress-image')} />
              <span className={cx('progress-label')}>{progress.label}</span>

              <i className={cx('progress-icon')}>
                <FontAwesomeIcon icon={faCircleCheck} />
              </i>
            </div>
          ))}
        </div>
      </div>
      {/* Payment */}
      <Payment href={`${config.paths.orders}/id`} label="paid" />
    </div>
  )
}

export default Order
