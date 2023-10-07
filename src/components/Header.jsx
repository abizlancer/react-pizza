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
        <Link to="/">
          <img src="/assets/images/logo.svg" alt="logo" />
          <span>REACT PIZZA</span>
          <span>самая вкусная пицца во вселенной</span>
        </Link>
      </header>
      <Outlet />
    </Fragment>
  )
}

export default Header