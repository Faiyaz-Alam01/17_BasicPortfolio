import React from 'react'
import { useParams } from 'react-router-dom'

function ParamsCom() {
  const {id} = useParams()
  console.log(id);
  
  return (
    <div className='h-96 w-full bg-gray-500 p-60 text-center text-black '>
      <p className=' p-4 b-0 w-mid'>Params : {id}</p>
    </div>
  )
}

export default ParamsCom
