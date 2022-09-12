import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from '~/styles/productDetails.module.scss'
import Image from '~/components/Image'
import images from '~/public/images'

const cx = classNames.bind(styles)
function productDetails() {
  const [index, setIndex] = useState(0)
  const [indexImage, setindexImage] = useState(0)
  // const [productData, setProductData] = useState([])
  // useEffect(() => {
  //   const product =
  //     {
  //       id: 1,
  //       imageUrl: '/images/slide4.jpg',
  //       name: 'CAMPAGNOLA',
  //       prices: [19.9, 23.9, 27.9],
  //       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  //     },

  //   setProductData(product)
  // }, [])
  const product = {
    id: 1,
    imageUrl: ['/images/slide3.jpg', '/images/slide4.jpg', '/images/slide5.jpg'],
    name: 'CAMPAGNOLA',
    prices: [19.9, 23.9, 27.9],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis sed beatae dolor consequuntur? Veritatis repellat quidem corporis delectus nemo nisi quas autem quod iusto, similique velit quia neque fuga? .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  }

  const handleIndex = (index: number) => {
    setIndex(index)
  }
  const handleIndexImage = (index: number) => {
    setindexImage(index)
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('images')}>
        <Image src={product.imageUrl[indexImage]} alt={product.name} className={cx('image')} />
        {/* Preview */}
        <div className={cx('preview')}>
          <Image
            onClick={() => handleIndexImage(0)}
            src={product.imageUrl[0]}
            alt={product.name}
            className={cx('preview-image', indexImage === 0 ? 'active' : '')}
          />
          <Image
            onClick={() => handleIndexImage(1)}
            src={product.imageUrl[1]}
            alt={product.name}
            className={cx('preview-image', indexImage === 1 ? 'active' : '')}
          />
          <Image
            onClick={() => handleIndexImage(2)}
            src={product.imageUrl[2]}
            alt={product.name}
            className={cx('preview-image', indexImage === 2 ? 'active' : '')}
          />
        </div>
      </div>
      <div className={cx('content')}>
        <h4 className={cx('name')}>{product.name}</h4>
        <span className={cx('price')}> &#36;{product.prices[index]}</span>
        <p className={cx('desc')}>{product.desc}</p>

        {/* sizes */}
        <div className={cx('sizes')}>
          <h6 className={cx('content-title')}>choose the size</h6>
          <div className={cx('options', 'sizes-options')}>
            <div className={cx('size', index === 0 ? 'active' : '')} onClick={() => handleIndex(0)}>
              <Image
                className={cx('size-image', 'size-small')}
                src={images.sizeProduct}
                alt="Product Index"
              />
              <span>small</span>
            </div>
            <div className={cx('size', index === 1 ? 'active' : '')} onClick={() => handleIndex(1)}>
              <Image
                className={cx('size-image', 'size-medium')}
                src={images.sizeProduct}
                alt="Product Index"
              />
              <span>medium</span>
            </div>
            <div className={cx('size', index === 2 ? 'active' : '')} onClick={() => handleIndex(2)}>
              <Image
                className={cx('size-image', 'size-large')}
                src={images.sizeProduct}
                alt="Product Index"
              />
              <span>large</span>
            </div>
          </div>
        </div>

        {/* choose ingredients */}
        <div className={cx('ingredients')}>
          <h6 className={cx('content-title')}>choose additional ingredients</h6>
          <div className={cx('options')}>
            <div className="ingredient">
              <input type="checkbox" id="double" name="double" className={cx('checkbox')} />
              <label className={cx('label')} htmlFor="double">
                Double Ingredients
              </label>
            </div>
            <div className="ingredient">
              <input type="checkbox" id="cheese" name="cheese" className={cx('checkbox')} />
              <label className={cx('label')} htmlFor="cheese">
                extra cheese
              </label>
            </div>
            <div className="ingredient">
              <input type="checkbox" id="spicy" name="spicy" className={cx('checkbox')} />
              <label className={cx('label')} htmlFor="spicy">
                spicy sauce
              </label>
            </div>
            <div className="ingredient">
              <input type="checkbox" id="garlic" name="garlic" className={cx('checkbox')} />
              <label className={cx('label')} htmlFor="garlic">
                garlic sauce
              </label>
            </div>
          </div>
        </div>

        {/* ADD PRODUCT BTN*/}
        <div className={cx('add')}>
          <input
            type="number"
            min="1"
            max="9999"
            step="1"
            defaultValue={1}
            name="quantity"
            id="quantity"
            className={cx('quantity')}
          />
          <button className={cx('btn')}>add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default productDetails
