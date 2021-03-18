import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const router = useRouter()
  const [gitUsername, setGitUsername] = useState('')

  function handleGitUsername(e) {
    setGitUsername(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push('/app')
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <header>
          <img src="/logo-full-white.svg" alt="Logo Move.it"/>
        </header>
        <div>
          <p>Bem-vindo</p>
          <div className={styles.instructions}>
            <img src="/icons/github.png" alt="github icon"/>
            <p>Faça login com seu Github para começar</p>
          </div>
          <form className={styles.inputUsername} onSubmit={handleSubmit}>
            <input type="text" required onChange={handleGitUsername} placeholder="Digite seu username" />
            { gitUsername.length == 0 ? (
              <button disabled>
                <img src="arrow.png" alt="sign in"/>
              </button>
            ) : (
              <button type="submit" className={styles.activeButton}>
                <img src="arrow.png" alt="sign in"/>
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}