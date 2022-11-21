import React from 'react'

const Food = (props) => { 
    return (
        <div style={{gridRowStart:props.food.x, gridColumnStart:props.food.y}} className='snakeFood'></div>
  )
}

export default Food