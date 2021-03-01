import styled from 'styled-components'


export const CountdownContainer = styled.div`
.countdownContainer {
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title)
}

.countdownContainer > div {
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${props => props.theme.colors.challegeBox.background};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  font-size: 8.5rem;
  text-align: center;
}

.countdownContainer > div span {
  flex: 1;
}
.countdownContainer > div span:first-child {
  border-right: 1px solid #f0f1f3;
}

.countdownContainer > div span:last-child {
  border-right: 1px solid #f0f1f3;
}

.countdownContainer > span {
  font-size: 6.25rem;
  color: ${props => props.theme.colors.text.color};
  transition: color 1000ms;
  margin: 0.5rem;
}

.CountdownButton {
  width: 100%;
  height: 5rem;
  
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  border: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;
}

.CountdownButton:not(:disabled):hover {
  background: var(--blue-dark)
}

.CountdownButtonActive {
  background: ${props => props.theme.colors.challegeBox.background}; 
  /* transition: background 1000ms; */
  color: var(--title);
  border-bottom: 1px solid var(--white);

  text-align: center;

  display: flex;
  justify-content: left;
  flex-direction: column;

}
.CountdownButtonActive:not(:disabled):hover {
  background: var(--red);
  color: var(--white);

}

.CountdownButtonActive h2 {
  margin: 1.15rem;
}

.CountdownButton:disabled {
  background-color: var(--white);
  background-size: 1%;
  color: var(--text);
  cursor: not-allowed;


  border-bottom: 5px solid var(--green);
}

.progressBarContainer {
  /* position: relative; */
  width: 99.9%;
  height: 95%;
  background: ${props => props.theme.colors.challegeBox.background};
  transition: background 1000ms;
  margin: auto;

  border-radius: 3px;

  display: flex;
  justify-content: bottom;
  align-items: bottom;
}

.progressBar {
  /* flex: 1; */

  width: 0%; 
  height: 100%;

  background-color: #0fd439;
  border-radius: 5px;

  animation: progress-animation 6000ms linear ;
  animation-fill-mode: forwards;  
  /* descomente se quiser que ela pare quando completar  (remova o "infinite" do animation acima) */
}

@keyframes progress-animation {
  0% {
    width: 0%;
}
10% {
    width: 10%;
}
20% {
    width: 20%;
}
30% {
    width: 30%;
}
40% {
    width: 40%;
}
50% {
    width: 50%;
}
60% {
    width: 60%;
}
70% {
    width: 70%;
}
80% {
    width: 80%;
}
90% {
    width: 90%;
}
100% {
    width: 100%;
}

}

`;