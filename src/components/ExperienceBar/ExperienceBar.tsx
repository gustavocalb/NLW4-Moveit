import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallegesContext'
import { ExperienceBarContainer } from './experienceBar'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <ExperienceBarContainer>
      <header className="experienceBar">
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percentToNextLevel}%` }} />

          <span className="currentExperience" style={{ left: `${percentToNextLevel}%` }}>
            {currentExperience} xp
        </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
    </ExperienceBarContainer>
  )
}