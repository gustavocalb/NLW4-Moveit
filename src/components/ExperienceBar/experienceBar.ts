import styled from 'styled-components'

export const ExperienceBarContainer = styled.div`
.experienceBar {
  display: flex;
  align-items: center;
}

.experienceBar span{
  font-size: 1rem;
  color: ${props => props.theme.colors.text.color};
  transition: color 1000ms;
}

.experienceBar > div {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
}

.experienceBar > div > div {
  height: 4px;
  border-radius: 4px;
  background: var(--green);
}

span.currentExperience {
  position: absolute;
  top: 12px;
  color: ${props => props.theme.colors.text.color};
  transform: translateX(-50%)
}

`;