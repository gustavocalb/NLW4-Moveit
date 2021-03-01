import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallegesContext'
import { Overlay } from './leveUpModal';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  return (
    <Overlay>
      <div className="overlay">
        <div className="container">
          < header > {level}</header >

          <strong>Parabens</strong>
          <p>Voce alcancou um novo level.</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </div >
      </div >
    </Overlay>
  )

}
