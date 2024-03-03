import React from 'react'
import './style.css'

const Cards = (props) => {
  return (
    <div className='card'>
        My Card Details - {props.data}
    </div>
  )
}

export default Cards