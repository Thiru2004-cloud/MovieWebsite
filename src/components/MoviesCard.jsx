import React from 'react'

export default function MoviesCard({ poster_path, movie_title,release_date }) {
  return (
    <div className="w-[250px] bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <img 
        src={`https://image.tmdb.org/t/p/w300${poster_path}`} 
        alt={movie_title} 
        className="w-full h-[350px] object-cover"
      />
      <div className="p-4">
        <div className="text-white font-bold text-center p-2">
          {movie_title}
          
        </div>
        <div className="text-white font-bold text-center">{release_date}</div>

      </div>
    </div>
  )
}
