import React from 'react'
import Link from 'next/link'
import { SiBilibili } from 'react-icons/si'

import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href='/' className={styles.logo}>
          <SiBilibili /> MyMovieApp
        </Link>
      </div>
    </header>
  )
}

export default Header
