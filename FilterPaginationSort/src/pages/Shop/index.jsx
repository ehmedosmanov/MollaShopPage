import React, { useState } from 'react'
import FilterSidebar from '../../components/FilterSidebar'
import Products from '../../components/Products'
import './index.scss'

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState([10, 90])

  const handleCategoryChange = categories => {
    setSelectedCategories(categories)
  }

  const handleSizeChange = sizes => {
    setSelectedSizes(sizes)
  }

  const handleColorChange = colors => {
    setSelectedColors(colors)
  }

  const handleBrandChange = brands => {
    setSelectedBrands(brands)
  }

  const handlePriceChange = priceRange => {
    setSelectedPriceRange(priceRange)
  }

  return (
    <section id='shop-section'>
      <div className='container'>
        <div className='shop-grid'>
          <FilterSidebar
            handleCategoryChange={handleCategoryChange}
            handleSizeChange={handleSizeChange}
            handleColorChange={handleColorChange}
            handleBrandChange={handleBrandChange}
            handlePriceChange={handlePriceChange}
          />
          <Products
            selectedCategories={selectedCategories}
            selectedSizes={selectedSizes}
            selectedColors={selectedColors}
            selectedBrands={selectedBrands}
            selectedPriceRange={selectedPriceRange}
          />
        </div>
      </div>
    </section>
  )
}

export default Shop
