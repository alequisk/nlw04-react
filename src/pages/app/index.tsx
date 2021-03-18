import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from '../../components/CompletedChallenges';
import { Countdown } from '../../components/Countdown';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { ChallengeBox } from '../../components/ChallengeBox';

import styles from '../../styles/pages/app/Home.module.css'
import { CountdownProvider } from '../../contexts/CountdownContext';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import Sidebar from '../../components/Sidebar'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  user_name: string;
  user_image_url: string;
}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile name={props.user_name} image_url={props.user_image_url} />
                <CompletedChallenges />
                <Countdown />
              </div>
              
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps : GetServerSideProps = async (ctx) => {

  //profile request
  const responseGithubAPI = await fetch("https://api.github.com/users/alequisk")
  const { name, avatar_url } = await responseGithubAPI.json()

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      user_name: name,
      user_image_url: avatar_url,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}