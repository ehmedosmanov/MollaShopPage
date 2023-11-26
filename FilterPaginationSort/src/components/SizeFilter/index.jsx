import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd'
const SizeFilter = ({ onSizeChange }) => {
  const sizes = [
    { id: 1, name: 'XS' },
    { id: 2, name: 'S' },
    { id: 3, name: 'M' },
    { id: 4, name: 'L' },
    { id: 5, name: 'XL' },
    { id: 6, name: 'XLL' }
  ]

  const [selectedSizes, setSelectedSizes] = useState([])

  const handleSizeChange = (sizeId, checked) => {
    console.log(sizeId, checked)
    if (checked) {
      setSelectedSizes([...selectedSizes, sizeId])
    } else {
      setSelectedSizes(selectedSizes.filter(id => id !== sizeId))
    }
  }

  useEffect(() => {
    onSizeChange(selectedSizes)
  }, [selectedSizes])

  return (
    <ul className='sizes-items'>
      {sizes &&
        sizes.map(size => (
          <li className='sizes-item' key={size.id}>
            <Checkbox
              onChange={e => handleSizeChange(size.id, e.target.checked)}>
              {size.name}
            </Checkbox>
          </li>
        ))}
    </ul>
  )
}

export default SizeFilter
