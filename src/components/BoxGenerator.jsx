import React from 'react'
import { useState } from 'react'

const BoxGenerator = (props) => {
    const [boxColor,setBoxColor] = useState("");
    const [boxes, setBoxes] = useState([]);



    
const handleSubmit = (e) => {
  e.preventDefault();
  props.newBox(boxColor);
  setBoxColor("");
}

  return (
    <div>
         <div className='container mt-5'>
            <div className='row'>
                <div className='col'></div>
                <div className='col bg-light'>
        <form onSubmit={ handleSubmit }>
            <div className='mb-3' >
                <label className='form-label'>Color: </label> 
                <input className='form-control' type="text" onChange={ (e) => setBoxColor(e.target.value)} value={boxColor} />
                <input className='btn btn-primary mt-3' type="submit" value='Add' />
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