import React from 'react'

export default function Watchlist() {
  return (
    <>
      <div className='flex justify-center m-10'>
        <input type="text" placeholder='SearchMovies' className='bg-gray-400 p-2 rounded outline-none text-white' />
      </div>
      <div  className='border border-gray-200 rounded-lg overflow-hidden'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Title</th>
              <th>Release Date</th>
              <th>Rating</th>
              <th>popularity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
             <tr>
              <tr>
                <td>
                <img src={`https://sund-images.sunnxt.com/172190/640x360_Jailer_172190_746ced2a-ae8c-4987-b67e-0a42229950c2.jpg`}  alt=""  className='w-[200px] h-[150px] p-4'   />
               
              </td>
              </tr>
              <td>20-8-2023</td>
              <td>28</td>
              <td>48</td>
               <td><button className='bg-red-500 p-1 text-white rounded-lg w-[70px] text-center h-[35px]'>remove</button></td>
             </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
