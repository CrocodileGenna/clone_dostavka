import styled from '@emotion/styled';

export const ConteinerMenu = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  @media screen and (min-width: 470px) {
    justify-content: center;
  }
  @media screen and (min-width: 760px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: 890px) {
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

export const MenuStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 250px;
  background-color: #d1d1d1d1;
  // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 760px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1000px;
  }
`;
