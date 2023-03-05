import styled from '@emotion/styled';

export const TitleMenuStyle = styled.ul`
  display: flex;
  padding: 15px;

  position: fixed;
  left: 120px;
  top: 140px;

  border-radius: 4px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  background-color: #00000014;
  box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 25%);

  @media screen and (min-width: 760px) {
  }

  @media screen and (min-width: 1200px) {
  }
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
