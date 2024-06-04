import React from 'react'
import './Button.css'
const Button = ({text}) => {
  return (
    <div>
        <button className='btn warning'> {text} </button>
    </div>
  )
}

export default Button