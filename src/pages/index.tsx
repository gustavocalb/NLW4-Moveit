import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar'
import { Profile } from '../components/Profile/Profile'
import { CompletedChallenges } from '../components/CompletedChalleges/CompletedChallenges'
import { Countdown } from '../components/Countdown/Countdown'
import { ChallegeBox } from '../components/ChallegeBox/ChallegeBox'


import { Container } from './Home'
import { CountdownProvider } from '../context/CountdownContext'
import { ChallengesProvider } from '../context/ChallegesContext'
import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/global';
import light from '../styles/theme/light'
import dark from '../styles/theme/dark';


interface NameProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  isDarkThemeActive: boolean;
}

export default function Home(props: NameProps) {
  const [theme, setTheme] = useState(light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Sidebar toggleTheme={toggleTheme} />
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <Head>
            <title>Inicio | move.it</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div className="">
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div className="">
                <ChallegeBox />
              </div>
              <div>
              </div>
            </section>
          </CountdownProvider>
        </ ChallengesProvider>
      </ThemeProvider>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted, isDarkThemeActive } = ctx.req.cookies

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
      isDarkThemeActive: Boolean(isDarkThemeActive)
    }
  }
}