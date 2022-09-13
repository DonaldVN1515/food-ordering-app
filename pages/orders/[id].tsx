import classNames from 'classnames/bind'

import styles from '~/styles/Order.module.scss'
import config from '~/config'
import Payment from '~/components/Payment'
const cx = classNames.bind(styles)
function Order() {
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
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={cx('order-loading')}></div>
      </div>
      {/* Payment */}
      <Payment href={`${config.paths.orders}/id`} label="paid" />
    </div>
  )
}

export default Order
