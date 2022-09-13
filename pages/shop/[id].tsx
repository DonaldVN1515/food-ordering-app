import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from '~/styles/ProductDetails.module.scss'
import Image from '~/components/Image'
import images from '~/public/images'

const cx = classNames.bind(styles)
function productDetails() {
  const [indexSize, setIndexSize] = useState(0)
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
    imageUrls: ['/images/slide3.jpg', '/images/slide4.jpg', '/images/slide5.jpg'],
    name: 'CAMPAGNOLA',
    prices: [19.9, 23.9, 27.9],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis sed beatae dolor consequuntur? Veritatis repellat quidem corporis delectus nemo nisi quas autem quod iusto, similique velit quia neque fuga? .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
    sizes: ['small', 'medium', 'large'],
    ingredients: ['double ingredients', 'extra cheese', 'spicy sauce', 'garlic sauce'],
  }

  const handleIndex = (index: number) => {
    setIndexSize(index)
  }
  const handleIndexImage = (index: number) => {
    setindexImage(index)
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('images')}>
        <Image src={product.imageUrls[indexImage]} alt={product.name} className={cx('image')} />
        {/* Preview */}
        <div className={cx('preview')}>
          {product.imageUrls.map((image, index) => (
            <Image
              key={index}
              onClick={() => handleIndexImage(index)}
              src={image}
              alt={product.name}
              className={cx('preview-image', indexImage === index ? 'active' : '')}
            />
          ))}
        </div>
      </div>
      <div className={cx('content')}>
        <h4 className={cx('name')}>{product.name}</h4>
        <span className={cx('price')}> &#36;{product.prices[indexSize]}</span>
        <p className={cx('desc')}>{product.desc}</p>

        {/* sizes */}
        <div className={cx('sizes')}>
          <h6 className={cx('content-title')}>choose the size</h6>
          <div className={cx('options', 'sizes-options')}>
            {product.sizes.map((size, index) => (
              <div
                key={index}
                className={cx('size', indexSize === index ? 'active' : '')}
                onClick={() => handleIndex(index)}
              >
                <Image
                  className={cx('size-image', size)}
                  src={images.sizeProduct}
                  alt="Product Index"
                />
                <span>{size}</span>
              </div>
            ))}
          </div>
        </div>

        {/* choose ingredients */}
        <div className={cx('ingredients')}>
          <h6 className={cx('content-title')}>choose additional ingredients</h6>
          <div className={cx('options')}>
            {product.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient">
                <input type="checkbox" id={`${index}`} name={`${index}`} className={cx('checkbox')} />
                <label className={cx('label')} htmlFor={`${index}`}>
                  {ingredient}
                </label>
              </div>
            ))}
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
