import styled from '@emotion/styled';

export const OneCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 17px;
  border-radius: 5px;
  padding: 0px;
  width: 300px;
  height: 450px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const ImageInCard = styled.img`
  width: 170px;
  // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
  border-radius: 50%;
`;

export const NamePoisition = styled.h1`
  text-align: center;
  padding: 5px;
  font-size: 18px;
`;

export const Description = styled.p`
  padding: 5px;
  font-size: 16px;
  text-align: center;
  margin: 7px;
`;

export const Massa = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const Size = styled.p`
  font-size: 12px;
`;

export const ButtonPrice = styled.button`
  font-size: 20px;
  text-align: center;
  padding: 4px 20px;
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
`;
