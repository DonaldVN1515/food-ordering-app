import classNames from 'classnames/bind'
import Link from 'next/link'

import styles from './Payment.module.scss'

const cx = classNames.bind(styles)
function Payment({ href, label }) {
  return (
    <div className={cx('payment')}>
      <h6 className={cx('payment-title')}>cart total</h6>
      <table className={cx('payment-table')}>
        <thead>
          <tr>
            <th>subtotal:</th>
            <th>discount:</th>
            <th>total:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$18</td>
            <td>$0.00</td>
            <td>$18.00</td>
          </tr>
        </tbody>
      </table>
      <Link href={href}>
        <button className={cx('btn', 'checkout')}>{label}</button>
      </Link>
    </div>
  )
}

export default Payment
