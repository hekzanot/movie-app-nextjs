import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Development by&nbsp;
      <Link href='https://twitter.com/hekzanot' target='_blank'>
        Mücahit Eren Özcan
      </Link>
    </footer>
  )
}

export default Footer
