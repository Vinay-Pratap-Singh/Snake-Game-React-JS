import React from 'react'

const Snake = (props) => {
  return (
    <div style={{gridRowStart:props.body.x, gridColumnStart:props.body.y}} className='snakeBody'></div>
  )
}

export default Snake