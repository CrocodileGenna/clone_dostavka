import styled from '@emotion/styled';

export const OneCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 17px;
  border-radius: 5px;
  padding: 0px;
  width: 200px;
  height: 250px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 760px) {
    width: 250px;
    height: 320px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
    height: 420px;
  }
`;

export const ImageInCard = styled.img`
  width: 70px;
  // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
  border-radius: 50%;

  @media screen and (min-width: 760px) {
    width: 100px;
  }

  @media screen and (min-width: 1200px) {
    width: 170px;
  }
`;

export const NamePoisition = styled.h1`
  text-align: center;
  padding: 5px;
  font-size: 14px;

  @media screen and (min-width: 760px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  padding: 5px;
  font-size: 10px;
  text-align: center;
  margin: 7px;

  @media screen and (min-width: 760px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export const Massa = styled.p`
  font-size: 9px;
  font-weight: bold;

  @media screen and (min-width: 760px) {
    font-size: 11px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 13px;
  }
`;

export const Size = styled.p`
  font-size: 9px;

  @media screen and (min-width: 760px) {
    font-size: 11px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 13px;
  }
`;

export const ButtonPrice = styled.button`
  font-size: 14px;
  text-align: center;
  padding: 2px 10px;
  border: none;
  margin: 7px;
  border-radius: 4px;
  color: #ffffff;
  background-color: red;
  text-decoration: none;

  :hover,
  :focus {
    cursor: pointer;
    font-weight: bold;
    color: red;
    outline: 1px solid red;
    background-color: #ffffff;
  }

  @media screen and (min-width: 760px) {
    font-size: 11px;
    padding: 3px 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    padding: 4px 20px;
  }
`;
