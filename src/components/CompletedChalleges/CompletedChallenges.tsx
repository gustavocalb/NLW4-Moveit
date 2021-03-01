import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallegesContext'
import { CompletedChallengesContainer } from './completedChallenges';


export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengesContainer>
      <div className="completedChallengesContainer">
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
      </div>
    </CompletedChallengesContainer>
  )
}