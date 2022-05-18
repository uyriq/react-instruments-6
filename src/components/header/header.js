import React from 'react';
import headerLogo from '../../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={headerLogo} alt="логотип." />
        <h1>Собачки, следящие за тобой, пока ты изучаешь React</h1>
      </header>
    );              
  }
}

export default Header;
