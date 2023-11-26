import React, { useEffect, useState } from 'react'
import { Checkbox } from 'antd'
import './index.scss'
import ColorCheckbox from '../ColorCheckbox'
const ColorFilter = ({ onColorChange }) => {
  const colors = [
    { id: 1, name: 'Brown' },
    { id: 2, name: 'Khaki' },
    { id: 3, name: 'Blue' },
    { id: 4, name: 'Beige' },
    { id: 5, name: 'Orange' },
    { id: 6, name: 'Light' },
    { id: 7, name: 'Yellow' }
  ]

  const [selectedColors, setSelectedColors] = useState([])

  const handleColorChange = (colorId, checked) => {
    if (checked) {
      setSelectedColors([...selectedColors, colorId])
    } else {
      setSelectedColors(selectedColors.filter(id => id !== colorId))
    }
  }

  useEffect(() => {
    onColorChange(selectedColors)
  }, [selectedColors])
  return (
    <ul>
      <ul className='colors-items'>
        {colors.map(color => (
          <ColorCheckbox
            key={color.id}
            color={color.name}
            onChange={() =>
              handleColorChange(color.id, !selectedColors.includes(color.id))
            }
            checked={selectedColors.includes(color.id)}
          />
        ))}
      </ul>
    </ul>
  )
}

export default ColorFilter
