import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallegesContext';
import { CountdownContext } from '../../context/CountdownContext';
// import styles from '../../styles/components/ChallegeBox.module.css';
import { ChallengeBoxContainer } from './challegeBox';

export function ChallegeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengeBoxContainer>
      <div className="challengeBoxContainer">
        {activeChallenge ? (
          <div className="challengeActive">
            <header>Ganhe {activeChallenge.amount} xp </header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button
                type="button"
                className="challengeFailedButton"
                onClick={handleChallengeFailed}
              >
                Falhei
            </button>
              <button
                type="button"
                className="challengeSucceededButton"
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
          </div>
        ) : (
            <div className="challengeNotActive">
              <p>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios
            </p>
            </div>
          )
        }
      </div >
    </ChallengeBoxContainer>
  )
}