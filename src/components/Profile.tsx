import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

interface ProfileProps {
  name: string;
  image_url: string;
}

export function Profile(props: ProfileProps) {
  
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src={props.image_url} alt={`${props.name}`}/>
      <div>
        <strong>{props.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}