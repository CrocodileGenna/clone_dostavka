import React from 'react';
import { OneCard } from './OneCard';
import { MenuStyled } from './styled/Menu.styled';
// import { MenuStyled, TitleMenu, OnePosition, Link } from './styled/Menu.styled';

export function Menu({ prop }) {
  // const renderedTypes = new Set();
  return (
    <MenuStyled>
      {/* <TitleMenu>
        {prop.map(({ title }) => {
          if (!renderedTypes.has(title)) {
            renderedTypes.add(title);
            return (
              <OnePosition key={title}>
                <Link href="/">{title}</Link>
              </OnePosition>
            );
          }
          return;
        })}
      </TitleMenu> */}
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
