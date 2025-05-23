'use client'

import ContactForm from '../components/ContactForm'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Contact <span className={styles.accent}>Form</span>
        </h1>

        <p className={styles.description}>
          A smooth and interactive form template with real-time validation
        </p>

        <ContactForm />
      </div>
    </main>
  )
}
