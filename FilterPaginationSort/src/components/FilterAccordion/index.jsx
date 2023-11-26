import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import './index.scss'

const FilterAccordion = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='filter-accordion'>
      <div className='filter-accordion__header' onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      <div className={`filter-accordion__content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default FilterAccordion
