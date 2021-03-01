import styled from 'styled-components'

export const SideBarContainer = styled.div`
  .sideBarContainer {
    position: fixed;

    width: 6%;
    height: 100%;

    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
 

    background: ${props => props.theme.colors.sidebar.background};
    transition: background 1000ms;
    filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));

    display: flex;
    align-items: left; 
    justify-content: center;
  }
  .container {
    flex: 1;

    height: 100%;

    /* background: red; */

    display: flex;
    align-items: center;
    flex-direction: column;

  }

.sideBarContainer button {
    width: 168%;

    margin: 0 0 3rem 0;

    background: transparent;

    border: none;
    border-left: 4px solid ${props => props.theme.colors.sidebar.button.border};
    transition: border 1000ms;

    outline: none;
  }

 .imageContainer svg {
    width: 90%;

    margin: 1rem auto 20rem;

    transition: fill 1000ms;
  }
`;