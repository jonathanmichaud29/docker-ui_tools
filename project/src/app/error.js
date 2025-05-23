'use client'

import { useEffect } from 'react'
import styles from '../styles/Error.module.scss'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <main className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>500</h1>
        <h2 className={styles.errorTitle}>Something went wrong!</h2>
        <p className={styles.errorDescription}>
          An unexpected error occurred. Please try again later.
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={reset} className={styles.retryButton}>
            Try Again
          </button>
          <a href="/" className={styles.homeButton}>
            Go Back Home
          </a>
        </div>
      </div>
    </main>
  )
}
