import React from 'react';
import { OneCard } from './OneCard';
import { MenuStyled } from './styled/Menu.styled';
export function Menu({ prop }) {
  return (
    <MenuStyled>
      {prop.map(props => {
        return (
          <li key={props.name}>
            <OneCard prop={props} />
          </li>
        );
      })}
    </MenuStyled>
  );
}
