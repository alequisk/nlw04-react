import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const [username, setUsername] = useState('Anonymous')
  const [avatar, setAvatar] = useState('https://github.com/alequisk.png')

  const { level } = useContext(ChallengesContext)


  return (
    <div className={styles.profileContainer}>
      <img src={avatar} alt="Alex Sousa"/>
      <div>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}