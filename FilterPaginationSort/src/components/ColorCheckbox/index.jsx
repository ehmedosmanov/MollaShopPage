import React, { useState } from 'react'
import { Checkbox } from 'antd'

const ColorCheckbox = ({ color, onChange, checked }) => {
  return (
    <li
      className={`circle categories-item ${
        checked ? 'border circle categories-item' : null
      } ${color}`}>
      <Checkbox onChange={onChange} checked={checked}>
        {checked && <span className='checkmark'>&#10003;</span>}
      </Checkbox>
      <span className='category-count'></span>
    </li>
  )
}

export default ColorCheckbox
