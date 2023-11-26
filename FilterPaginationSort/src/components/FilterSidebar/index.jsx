import { useState } from 'react'
import CategoryFilter from '../CategoryFilter'
import SizeFilter from '../SizeFilter'
import ColorFilter from '../ColorFilter'
import BrandFilter from '../BrandFilter'
import PriceFilter from '../PriceFilter'
import './index.scss'
import FilterAccordion from '../FilterAccordion'

const FilterSidebar = ({
  handleCategoryChange,
  handleSizeChange,
  handleColorChange,
  handleBrandChange,
  handlePriceChange
}) => {
  const clearAll = () => {
    handleCategoryChange([])
    handleSizeChange([])
    handleColorChange([])
    handleBrandChange([])
    handlePriceChange([10, 90])
  }

  return (
    <article className='filter-sidebar'>
      <div className='filter-sidebar__top'>
        <h3>Filters</h3>
        <button className='btn-primary' onClick={clearAll}>
          Clear All
        </button>
      </div>
      <div className='filter-sidebar__shop-filters'>
        <FilterAccordion
          title={'Category'}
          children={
            <CategoryFilter onCategoryChange={handleCategoryChange} />
          }></FilterAccordion>
        <FilterAccordion
          title={'Size'}
          children={
            <SizeFilter onSizeChange={handleSizeChange} />
          }></FilterAccordion>
        <FilterAccordion
          title={'Colour'}
          children={
            <ColorFilter onColorChange={handleColorChange} />
          }></FilterAccordion>
        <FilterAccordion
          title={'Brand'}
          children={
            <BrandFilter onBrandChange={handleBrandChange} />
          }></FilterAccordion>
        <FilterAccordion
          title={'Price'}
          children={
            <PriceFilter onPriceChange={handlePriceChange} />
          }></FilterAccordion>
      </div>
    </article>
  )
}

export default FilterSidebar
