import React from 'react'
import logo from '../logo.png'

export default function Navbar({}) {
    
  return (
     <div className="flex space-x-6 items-center pl-3 px-4 border-b-2 border-gray-200 h-[100px]">
      <img className="w-[90px] h-[90px]" src={logo} alt="logo" />

      <a href="/" className="text-blue-600 font-bold text-xl font-serif hover:text-blue-800">Home</a>
      <a href="/watchlist" className="text-blue-500 font-bold text-xl font-serif hover:text-blue-700">WatchList</a>
    </div> 
    
  )
}