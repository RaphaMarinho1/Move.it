import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExpericenceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Início</title>
      </Head>

      <ExpericenceBar />

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>

    </div>
  ) 
}
