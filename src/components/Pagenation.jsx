import React from 'react'

export default function Pagenation({Backward,Forward,pageNo}) {
  return (
    <div className='text-center mt-6 bg-blue-300 w-[100px] m-auto p-2 rounded font-bold'>
        <div className='flex justify-between'>
            <div className='text-white font-bold hover:cursor-pointer hover:scale-110 duration-300 ' onClick={Backward}><i class="fa-solid fa-arrow-left"></i></div>
            <div className='text-white font-bold'>{pageNo}</div>
             <div className='text-white font-bold hover:cursor-pointer hover:scale-110 duration-300' onClick={Forward}><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    </div>
  )
}
