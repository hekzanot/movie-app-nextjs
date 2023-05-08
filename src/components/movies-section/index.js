import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css'

const MoviesSection = ({ title, movies }) => {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          // Film/Dizi kartına tıklandığında detay sayfasına yapılacak yönlendirme.
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
              // Bulunduğu container'ın %100 boyutunu kaplaması için - widht/height kullanılmadı. 
                fill
                // Sayfaya her refresh atıldığında img'ın optimize edilmemesi için
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

// export { MoviesSectionLoading } from './loading'
export default MoviesSection
