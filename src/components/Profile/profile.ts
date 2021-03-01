import styled from 'styled-components'

export const ProfileContainer = styled.div`
.profileContainer {
  display: flex;
  align-items: center;
}

.profileContainer > img {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%
}

.profileContainer div {
  margin-left: 1.5rem;
}

.profileContainer div strong {
  font-size: 1.5rem;
  font-weight: 600;

  color: ${props => props.theme.colors.text.color};
  transition: color 1000ms;
}

.profileContainer div p {
  font-size: 1rem;
  color: ${props => props.theme.colors.text.color};
  transition: color 1000ms;
  margin-top: 0.5rem;
}

.profileContainer div p img {
  margin-right: 0.5rem;
}
`;