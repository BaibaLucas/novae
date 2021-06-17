import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Hamburger from '../Hamburger';

const Header = ({ history }) => {

  // State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });

  // State for disabled button
  const [disabled, setDisabled] = useState(false);

  // Determine if our menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 500);
  };

  // Use effect for page changes
  useEffect(() => {
    // Listen for page changes
    history.listen(() => {
      setState({
        clicked: false,
      });
    })
  });

  const handleMenu = () => {
    disableMenu();
    if(state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
      }); 
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
      });
    }
  };




  return (
  <header className='header'>
    <div className='header__container'>
      <div className='header__container__wrapper'>
        <div className='header__container__wrapper__inner-header'>
          <div className='header__container__wrapper__inner-header__logo'>
            <Link to ='/'>NOVAE.</Link>
          </div>
          <div className="header__container__wrapper__inner-header__menu">
            <button className='header__container__wrapper__inner-header__menu__button' disabled={disabled}onClick={handleMenu}>
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
    <Hamburger state={state}/>
  </header>
  );
};

export default withRouter(Header);