import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 0px 12px 1px;

  @media screen and (min-width: 768px) {
    height: 80px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const Logo = styled.img`
  width: 105px;
  height: 105px;

  @media screen and (min-width: 768px) {
    width: 125px;
    height: 125px;
  }
`;

export const Title = styled.h1`
  font-size: 45px;

  @media screen and (min-width: 768px) {
    font-size: 55px;
  }
`;

export const LeftInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Contacts = styled.ul`
  position: absolute;
  top: 102%;
  right: 280%;
  display: flex;
  justify-content: space-evenly;
  // flex-direction: column;
  border-radius: 5px;
  width: 325px;

  background-color: #fff;
  box-shadow: 0px 5px 4px 0px;
`;

export const ContentContact = styled.a`
  display: block;
  padding: 2px;
  margin: 2px 0;
  font-size: 12px;
  font-weight: bold;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Basket = styled.button`
  display: flex;
  padding: 0;
  margin: 5px;
  padding: 2px;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 768px) {
    padding: 3px;
    width: 60px;
    height: 60px;
  }
`;

export const BasketImg = styled.img`
  width: 100%;
  height: 100%;
  borber-radius: 50%;
`;
