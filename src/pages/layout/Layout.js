import React from 'react';
import S from './style.js'
import { NavLink } from 'react-router-dom';
import logo from '../../global/logo/logo.png';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.Background>
      <NavLink to={"/"}>
        <S.Image src={logo} alt='logo'/>
      </NavLink>
      <Outlet />
    </S.Background>
  );
};

export default Layout;