import React from 'react'

const Label =({title}) => {
  return (
    <div>
      <label className='md:text-sm text-xs text-black font-medium capitalize'>{title}</label>
    </div>
  )
}

export default Label
