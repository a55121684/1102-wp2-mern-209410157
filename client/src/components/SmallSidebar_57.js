import React from 'react';
import Wrapper from '../assets/wrapper/SmallSidebar_57';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext_57';

import Logo_51 from './Logo_57';
import NavLinks_51 from './NavLinks_57';

const SmallSidebar_51 = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo_51 />
          </header>
          <NavLinks_51 toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar_51;
