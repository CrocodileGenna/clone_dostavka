// import React from 'react';
import logo from './images/1.png';
import basket from './images/addSale.png';
import {
  HeaderStyled,
  ContentHeader,
  Logo,
  Title,
  LeftInfo,
  Contacts,
  ContentContact,
  Basket,
  BasketImg,
} from './styled/Header.styled';

export function Header() {
  return (
    <HeaderStyled>
      <ContentHeader>
        <Logo src={logo} alt="logo" />
        <Title>FOOD DELIVERY</Title>
        <LeftInfo>
          <Contacts>
            <li>
              <ContentContact>+380992121234</ContentContact>
            </li>
            <li>
              <ContentContact>food-del@gmail.com</ContentContact>
            </li>
          </Contacts>
          <Basket>
            <BasketImg src={basket} alt="basket" />
          </Basket>
        </LeftInfo>
      </ContentHeader>
    </HeaderStyled>
  );
}
