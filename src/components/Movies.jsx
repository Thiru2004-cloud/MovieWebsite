import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import Pagenation from './Pagenation'

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  

  function Backward() {
    if (pageNo > 1) {
      setPageNo(pageNo - 1)
    }
  }

  function Forward() {
    if (pageNo < totalPages) {
      setPageNo(pageNo + 1)
    }
  }

  useEffect(() => {
    axios.get( `https://api.themoviedb.org/3/discover/movie?api_key=4948bb541572dfd10a6f2465e09c3967&with_original_language=ta&sort_by=popularity.desc&page=${pageNo}`)
    .then((res) => {
        setMovies(res.data.results)
        setTotalPages(res.data.total_pages)
      })
  }, [pageNo])

  const MoviesList = movies.map((movie) =>
    <MoviesCard
      key={movie.id}
      poster_path={movie.poster_path}
      movie_title={movie.title}
      release_date={movie.release_date}
    />
  )

  return (
    <div>
      <div className="text-2xl font-bold text-center p-4 m-10">
        🎬 Trending Movies
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {MoviesList}
      </div>

      <div>
        <Pagenation Backward={Backward} Forward={Forward} pageNo={pageNo} />
      </div>
    </div>
  )
}
