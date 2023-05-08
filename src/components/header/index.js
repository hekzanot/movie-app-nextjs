import React from 'react'
import Link from 'next/link'
import { FaPlayCircle } from 'react-icons/fa'

import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href='/' className={styles.logo}>
          <FaPlayCircle /> MyMovieApp
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href='/'>Filmler</Link>
          <Link href='/'>Diziler</Link>
          <Link href='/'>Çocuklar</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
