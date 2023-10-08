import { Fragment } from 'react';
import {
  Link,
  Outlet
} from 'react-router-dom'


const Header = () => {
  console.log('header rendered');
  return (
    <Fragment>
      <header className="header">
        <Link to="/" className='logo'>
          <img src="./src/assets/images/logo.png" alt="" />
          <h4>REACT PIZZA</h4>
          <span>самая вкусная пицца во вселенной</span>
        </Link>

        <div className="header__item">
          <span className='header__item--price'>520 ₽</span>
          <Link to='/cart' className='header__item--cart'>
            <img src="./src/assets/images/cart.png" alt="" />
            <span>3</span>
          </Link>
        </div>
      </header>
      <Outlet />
    </Fragment>
  )
}

export default Header