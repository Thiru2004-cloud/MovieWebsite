import React from 'react'

export default function Banner() {
  return (
    <div>
      <div  
        className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end mb-4"
        style={{
         
          backgroundImage:"url('https://indiaglitz-medianw.s3.amazonaws.com/tamil/home/coolie140825_1.jpg')"
        }}
      >
        <div className='text-white text-xl text-center w-full bg-gray-900/60'>Coolie</div>
      </div>
    </div>
  )
}
