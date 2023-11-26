import React, { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCard from '../ProductCard'
import './index.scss'

const Products = ({
  selectedCategories,
  selectedSizes,
  selectedColors,
  selectedBrands,
  selectedPriceRange
}) => {
  const baseUrl = 'http://localhost:3000/products'
  const { data } = useFetch(baseUrl)
  const [layoutClass, setLayoutClass] = useState('four-column')
  const [selectedSortOption, setSelectedSortOption] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pagePerData, setPagePerDatas] = useState(3)
  const [pageNumbers, setPageNumbers] = useState([])

  const handleSortChange = e => {
    const selectedOption = e.target.value
    setSelectedSortOption(selectedOption)
  }

  const filteredProducts =
    data?.filter(
      product =>
        (selectedSizes.length === 0 ||
          selectedSizes.includes(product?.sizeId)) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product?.categoryId)) &&
        (selectedColors.length === 0 ||
          selectedColors.includes(product?.colorId)) &&
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product?.brandId)) &&
        product?.price >= selectedPriceRange[0] &&
        product?.price <= selectedPriceRange[1]
    ) || []

  const handleLayoutClick = layout => {
    setLayoutClass(layout)
  }

  const sortProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSortOption === 'HightoLow') {
      return b.price - a.price
    }
    if (selectedSortOption === 'LowtoHigh') {
      return a.price - b.price
    }
    if (selectedSortOption === 'AtoZ') {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    }
    if (selectedSortOption === 'ZtoA') {
      return a.name > b.name ? -1 : a.name < b.name ? 1 : 0
    }
    return 0
  })

  useEffect(() => {
    const numbers = []
    for (
      let i = 1;
      i < Math.ceil((sortProducts?.length || 1) / pagePerData);
      i++
    ) {
      numbers.push(i)
    }
    setPageNumbers(numbers)
  }, [data])

  const lastElemenetIndex = currentPage * pagePerData
  const firstElementIndex = lastElemenetIndex - pagePerData

  const pageData = (sortProducts || []).slice(
    firstElementIndex,
    lastElemenetIndex
  )

  const handleClick = num => {
    setCurrentPage(num)
  }

  return (
    <div className='all-products'>
      <div className='product-info'>
        <p>
          Showing {sortProducts && sortProducts.length} of
          {data && data.length} Products
        </p>

        <div className='products__right-side'>
          <div className='sort-by'>
            <p>Sort by:</p>
            <select value={selectedSortOption} onChange={handleSortChange}>
              <option value='HightoLow'>High to Low</option>
              <option value='LowtoHigh'>Low to High</option>
              <option value='AtoZ'>A to Z</option>
              <option value='ZtoA'>Z to A</option>
            </select>
          </div>
          <div className='toolbox-layout'>
            <a
              href='#'
              className={`${
                layoutClass === 'direct' ? 'active' : 'btn-layout'
              }`}
              onClick={() => handleLayoutClick('direct')}>
              <svg width='16' height='10'>
                <rect x='0' y='0' width='4' height='4'></rect>
                <rect x='6' y='0' width='10' height='4'></rect>
                <rect x='0' y='6' width='4' height='4'></rect>
                <rect x='6' y='6' width='10' height='4'></rect>
              </svg>
            </a>
            <a
              href='#'
              className={`${
                layoutClass === 'two-column' ? 'active' : 'btn-layout'
              }`}
              onClick={() => handleLayoutClick('two-column')}>
              <svg width='10' height='10'>
                <rect x='0' y='0' width='4' height='4'></rect>
                <rect x='6' y='0' width='4' height='4'></rect>
                <rect x='0' y='6' width='4' height='4'></rect>
                <rect x='6' y='6' width='4' height='4'></rect>
              </svg>
            </a>

            <a
              href='#'
              className={`${
                layoutClass === 'three-column' ? 'active' : 'btn-layout'
              }`}
              onClick={() => handleLayoutClick('three-column')}>
              <svg width='16' height='10'>
                <rect x='0' y='0' width='4' height='4'></rect>
                <rect x='6' y='0' width='4' height='4'></rect>
                <rect x='12' y='0' width='4' height='4'></rect>
                <rect x='0' y='6' width='4' height='4'></rect>
                <rect x='6' y='6' width='4' height='4'></rect>
                <rect x='12' y='6' width='4' height='4'></rect>
              </svg>
            </a>
            <a
              href='#'
              className={`${
                layoutClass === 'four-column' ? 'active' : 'btn-layout'
              }`}
              onClick={() => handleLayoutClick('four-column')}>
              <svg width='22' height='10'>
                <rect x='0' y='0' width='4' height='4'></rect>
                <rect x='6' y='0' width='4' height='4'></rect>
                <rect x='12' y='0' width='4' height='4'></rect>
                <rect x='18' y='0' width='4' height='4'></rect>
                <rect x='0' y='6' width='4' height='4'></rect>
                <rect x='6' y='6' width='4' height='4'></rect>
                <rect x='12' y='6' width='4' height='4'></rect>
                <rect x='18' y='6' width='4' height='4'></rect>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='products'>
        {pageData &&
          pageData.map(product => (
            <ProductCard
              className={layoutClass}
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              status={product.status}
              isStock={product.isStock}
            />
          ))}
        {sortProducts.length === 0 ? (
          <p className='text-center'>No find product</p>
        ) : null}
      </div>
      <div className='pagination'>
        {pageNumbers.map(num => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Products
