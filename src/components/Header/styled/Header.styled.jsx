import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #dde0ff;
  box-shadow: 0px 0px 12px 1px;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;
  width: 1200px;
`;

export const Logo = styled.img`
  width: 105px;
  height: 105px;
`;

export const Title = styled.h1`
  font-size: 35px;
  color: blue;
`;

export const LeftInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
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
  margin: 0 0 0 20px;
  border-radius: 50%;
  width: 45px;
  height: 45px;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  }
`;

export const BasketImg = styled.img`
  width: 100%;
  height: 100%;
  borber-radius: 50%;
`;
