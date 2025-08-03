import React from 'react'
import {Html} from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
        <div className='flex justify-center items-center'>
       {/* <div className="flex justify-center items-center w-full h-screen bg-[#e6ebfc]"></div> */}
          <div className="absolute text-pink-500 text-xl font-semibold">Loading Universe</div>
          <div 
            className={`
              w-20 h-20
              border-[10px] border-opacity-30 border-pink-400 border-t-pink-400 
              rounded-full animate-spin
              shadow-pink-400 shadow-lg
            `}
          >
          </div>
        </div>
    </Html>
    
  )
}

export default Loader