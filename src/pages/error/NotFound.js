import React from 'react';
import S from './style.js';
import logo from '../../global/logo/logo.png';
import Button from '../../components/button/BasicButton.jsx';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <S.Background>
      <S.Image src={logo}/>
      <S.H4>페이지를 찾을 수 없습니다.</S.H4>
      <NavLink to={'/'}>
      <Button size={"small"} variant={"main"} shape={"default"} color={"white"}>메인으로 돌아가기</Button>
      </NavLink>
    </S.Background>
  );
};

export default NotFound;