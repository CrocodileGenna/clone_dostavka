import styled from '@emotion/styled';

export const MenuStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f5f5f5d1;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const TitleMenu = styled.ul`
  display: flex;
  position: fixed;
  left: 30px;
  top: 200px;
  padding: 5px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  background-color: #00000014;
  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 25%);
`;

export const OnePosition = styled.li`
  display: block;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 5px;
  padding: 5px;
  border-radius: 4px;
  background-color: red;
  box-shadow: 0px 5px 10px 2px rgb(0 0 0 / 25%);
  text-decoration: none;

  color: #fff;
  :hover,
  :focus {
    cursor: pointer;
    // font-weight: bold;
    color: red;
    background-color: #fff;
  }
`;
