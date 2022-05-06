import React from 'react'

function BoxDisplay(props) {
  return (
    <div>
        <div className='container'>{props.box}</div>
        <div className='bg-danger'></div>
        <div className='bg-secondary'></div>
        <div className='bg-warning'></div>
    </div>
  )
}

export default BoxDisplay