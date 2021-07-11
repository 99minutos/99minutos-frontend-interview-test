import React from 'react';

import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className='mainLayout'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='mainLayoutContainer'>{children}</div>
    </div>
  );
};

export default MainLayout;
