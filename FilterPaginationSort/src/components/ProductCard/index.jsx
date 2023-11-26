import React from 'react'
import './index.scss'
const ProductCard = ({
  name,
  image,
  price,
  category,
  className,
  status,
  isStock
}) => {
  const renderStatus = () => {
    if (!isStock) {
      return <span className='status stock'>Out of Stock</span>
    }

    if (status) {
      return (
        <span className={`status ${status === 'New' ? 'New' : 'Top'}`}>
          {status}
        </span>
      )
    }

    return null
  }
  return (
    <div className={`${className} product`}>
      <div className='product-img'>
        {renderStatus()}
        <img src={image} alt='' />
      </div>
      <div className='product-content'>
        <span>{category}</span>
        <h4>{name}</h4>
        <span>${price}.00</span>
      </div>
    </div>
  )
}

export default ProductCard
