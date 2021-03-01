
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { SideBarContainer } from './sidebar';

interface Props {
  toggleTheme?: () => void;
}
const Sidebar: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <SideBarContainer>
      <div className="sideBarContainer">
        <div className="container">
          <div className="imageContainer">
            <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2416 0H32.6817L23.9965 42H13.5564L22.2416 0Z" fill={colors.logo.color} />
              <path d="M37.56 0H48L41.2331 32.9078H30.7905L37.56 0Z" fill={colors.logo.color} />
              <path d="M6.76946 0H17.2095L10.4425 32.9078H0L6.76946 0Z" fill={colors.logo.color} />
            </svg>
          </div>
          <button >
            <img src="/icons/house.svg" alt="" />
          </button>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={colors.primary}
            onColor={colors.secundary}
          />
        </div>
      </div>
    </SideBarContainer>
  )
}

export default Sidebar;