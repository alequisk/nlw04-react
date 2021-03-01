import { useEffect, useState } from 'react';
import styles from '../styles/components/Profile.module.css'

interface IUserData {
  name?: string;
  avatar_url?: string;
  ok: boolean;
}

export function Profile() {

  const [username, setUsername] = useState('Anonymous')
  const [avatar, setAvatar] = useState('https://github.com/alequisk.png')

  useEffect(() => {
    (async () => {
      await fetch('https://api.github.com/users/alequisk')
      .then(res => res.json())
      .then((result) => {
        const {avatar_url, name} = result
        setAvatar(avatar_url)
        setUsername(name)
      }, (error) => {
        console.log('Error: ', error)
      })
    })()
    console.log('use effect')
  }, [])

  return (
    <div className={styles.profileContainer}>
      <img src={avatar} alt="Alex Sousa"/>
      <div>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}