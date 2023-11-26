import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd'
import './index.scss'

const CategoryFilter = ({ onCategoryChange }) => {
  const categories = [
    { id: 1, name: 'Dresses' },
    { id: 2, name: 'Jackets' },
    { id: 3, name: 'Jeans' },
    { id: 4, name: 'Shoes' },
    { id: 5, name: 'Bags' },
    { id: 6, name: 'Jumpers' }
  ]

  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategoryChange = (categoryId, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
      console.log(selectedCategories)
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId))
    }
  }

  useEffect(() => {
    onCategoryChange(selectedCategories)
  }, [selectedCategories])

  return (
    <ul className='categories-items'>
      {categories.map(category => (
        <li className='categories-item' key={category.id}>
          <Checkbox
            onChange={e => handleCategoryChange(category.id, e.target.checked)}>
            {category.name}
          </Checkbox>
          <span className='category-count'></span>
        </li>
      ))}
    </ul>
  )
}

export default CategoryFilter
