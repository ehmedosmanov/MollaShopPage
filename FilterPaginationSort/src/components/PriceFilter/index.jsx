import React, { useState, useEffect } from 'react'
import { Slider } from 'antd'

const PriceFilter = ({ onPriceChange }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([10, 90])

  const onChange = value => {
    console.log('onChange: ', value)
    setSelectedPriceRange(value)
  }

  const onAfterChange = value => {
    console.log('onAfterChange: ', value)
    onPriceChange(value)
  }

  useEffect(() => {
    onPriceChange(selectedPriceRange)
  }, [selectedPriceRange])

  return (
    <div className='price-filter'>
      <div className='price-filter__header'>
        <p>
          Price range: ${selectedPriceRange[0]} - ${selectedPriceRange[1]}
        </p>
      </div>
      <div className='price-filter__range'>
        <Slider
          range
          step={10}
          defaultValue={selectedPriceRange}
          onChange={onChange}
          onAfterChange={onAfterChange}
        />
      </div>
    </div>
  )
}

export default PriceFilter
