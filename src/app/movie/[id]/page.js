import React from 'react'
import {notFound }from "next/navigation"
import MovieContainer from '@/containers/movie'

const API_URL = 'https://api.themoviedb.org/3'

const getMovie = async (movieId) => {
  const rest = await fetch(
    `${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`
  )
  return rest.json()
}



const MoviePage = async ({ params, searchParams }) => {
  // await delay(2000)


  const movieDetail = await getMovie(params.id)
  // console.log(params)

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error happened");
  } 
  
  return <MovieContainer movie={movieDetail} />
}

export default MoviePage