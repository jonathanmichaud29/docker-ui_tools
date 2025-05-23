import Link from 'next/link'
import styles from '../styles/Error.module.scss'

export default function NotFound() {
  return (
    <main className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorDescription}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className={styles.homeButton}>
          Go Back Home
        </Link>
      </div>
    </main>
  )
}
