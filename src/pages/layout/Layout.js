import React from 'react';
import S from './style.js'
import { NavLink } from 'react-router-dom';
import logo from '../../global/logo/logo.png'

const Layout = () => {
  return (
    <S.Background>
      <NavLink to={"/"}>
        <S.Image src={logo} />
      </NavLink>
    </S.Background>
  );
};

export default Layout;