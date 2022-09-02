import React from 'react'

const Movement = ({move}) => {
  return (
    <div className='item-move'>
        <p className='item-move__info'>{move.move.name}</p>
    </div>
  )
}

export default Movement