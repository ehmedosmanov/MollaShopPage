import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd'
const BrandFilter = ({ onBrandChange }) => {
  const brands = [
    { id: 1, name: 'Next' },
    { id: 2, name: ' River Island' },
    { id: 3, name: 'Geox' },
    { id: 4, name: 'UGG' },
    { id: 5, name: 'F&F' },
    { id: 6, name: 'Nike' }
  ]

  const [selectedBrands, setSelectedBrands] = useState([])

  const handleBrandChange = (categoryId, checked) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, categoryId])
    } else {
      setSelectedBrands(selectedBrands.filter(id => id !== categoryId))
    }
  }

  useEffect(() => {
    onBrandChange(selectedBrands)
  }, [selectedBrands])
  return (
    <ul className='brands-items'>
      {brands &&
        brands.map(brand => (
          <li key={brand.id} className='brands-item'>
            <Checkbox
              onChange={e => handleBrandChange(brand.id, e.target.checked)}>
              {brand.name}
            </Checkbox>
          </li>
        ))}
    </ul>
  )
}

export default BrandFilter
