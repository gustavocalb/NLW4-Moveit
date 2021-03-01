import { clear } from 'console';
import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../../context/CountdownContext';
import { CountdownContainer } from './countdown'


export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)


  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return (
    <CountdownContainer>
      <div className="countdownContainer">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className="CountdownButton"
        >
          Ciclo encerrado
        </button>
      ) : (
          <>
            { isActive ? (
              <>

                <button
                  type="button"
                  className="CountdownButton CountdownButtonActive"
                  onClick={resetCountdown}
                >
                  <h2>Abandonar ciclo</h2>
                  <div className="progressBarContainer">
                    <div className="progressBar" />

                  </div>
                </button>


              </>
            ) : (
                <button
                  type="button"
                  className="CountdownButton"
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                </button>
              )}
          </>
        )
      }
    </CountdownContainer >
  )
}