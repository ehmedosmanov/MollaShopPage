import React from 'react'
import './index.scss'
const ProductCard = ({ name, image, price, category, className }) => {
  return (
    <div className={`${className} product`}>
      <div className='product-img'>
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
