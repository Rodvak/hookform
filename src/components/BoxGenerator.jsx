import React from 'react'
import { useState } from 'react'

const BoxGenerator = (props) => {
    const [color,setColor] = useState("");



  return (
    <div>
         <div className='container mt-5'>
            <div className='row'>
                <div className='col'></div>
                <div className='col bg-light'>
        <form onSubmit={ color }>
            <div className='mb-3' >
                <label className='form-label'>Color: </label> 
                <input className='form-control' type="text" onChange={color} value={color} />
                <input className='btn btn-primary mt-3' type="submit"/>
            </div>     
        </form>
        </div>
        <div className='col'></div>
        </div>
        </div>

    </div>

  )
}

export default BoxGenerator