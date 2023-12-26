import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout.jsx';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import NavLinks from './NavLinks';

const SmallSidebar = ({ isBigSidebar }) => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button
            type='button'
            className='close-btn'
            onClick={isBigSidebar ? null : toggleSidebar}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
