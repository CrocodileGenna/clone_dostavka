// import React from 'react';
import { OneCard } from './OneCard';
import { MenuStyled, ConteinerMenu } from './styled/Menu.styled';
// import { MenuStyled, TitleMenu, OnePosition, Link } from './styled/Menu.styled';
import { TitleMenu } from './TitleMenu';

export function Menu({ prop }) {
  return (
    <ConteinerMenu>
      <TitleMenu props={prop} />
      <MenuStyled>
        {prop.map(props => {
          return (
            <li key={props.name}>
              <OneCard prop={props} />
            </li>
          );
        })}
      </MenuStyled>
    </ConteinerMenu>
  );
}
