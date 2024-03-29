import { useState } from 'react';
import './Header.scss';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Link to="/" className="header__logo">
            <img className="header__logo--img" src="./img/watch.svg" alt="logo" />
          </Link>
          <div className={classNames('header__burger', {'active': isActive})} onClick={() => setIsActive(!isActive)}>
            <span></span>
          </div>
          <nav className={classNames('header__menu', {'active': isActive})}>
            <NavLink to="/" className="header__link" onClick={() => setIsActive(false)}>ГОДИННИКИ</NavLink>
            <NavLink to="/notebooks" className="header__link" onClick={() => setIsActive(false)}>НОУТБУКИ</NavLink>
            <NavLink to="/tablets" className="header__link" onClick={() => setIsActive(false)}>ПЛАНШЕТИ</NavLink>
          </nav>
        </div>
       </div>
    </header>
  )
}