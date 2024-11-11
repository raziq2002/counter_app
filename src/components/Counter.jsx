import React from 'react'

const Counter = () => {
  return (
   
        <div className="border rounded p-5 text-center">
            <h1  style={{fontSize:'100px'}} className='text-info'>100</h1>
            <div style={{width:'500px'}} className="d-flex justify-content-between my-5">
                <button className='btn btn-success'>Decrement</button>
                <button className='btn btn-danger'>Reset</button>
                <button className='btn btn-success'>Increment</button>
            </div>
        </div>
   
  )
}

export default Counter
