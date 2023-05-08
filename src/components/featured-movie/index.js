import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import styles from './styles.module.css'

const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
  const { poster_path, title, overview } = movie

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ''
        }`}
        // Film/Dizi descriptionını üç nokta olarak kısa önizlemesi için 
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Detayını gör
        </Link>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
          // Position: absolute yapar ve resmi body'e yerleştirir
        />
      </div>
    </div>
  )
}

// export { FeatureMovieLoading } from './loading'
export default FeaturedMovie