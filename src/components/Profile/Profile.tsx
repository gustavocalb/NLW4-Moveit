import { ChallengesContext } from '../../context/ChallegesContext';
import { useContext } from 'react'
import { ProfileContainer } from './profile'

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <ProfileContainer>
      <div className="profileContainer">
        <img src="https://github.com/FireShark688.png" alt="FireShark" />
        <div>
          <strong>Fire Shark</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
          level {level}
          </p>
        </div>
      </div>
    </ProfileContainer>
  )
}