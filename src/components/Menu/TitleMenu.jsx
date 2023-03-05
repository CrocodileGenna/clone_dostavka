import { TitleMenuStyle, OnePosition, Link } from './styled/Menu.styled';

export function TitleMenu({ props }) {
  //   console.log(props);
  const renderedTypes = new Set();
  const ret = [];
  return (
    <TitleMenuStyle>
      {props.map(({ title }) => {
        if (!renderedTypes.has(title)) {
          renderedTypes.add(title);
          return (
            <OnePosition key={title}>
              <Link href={title}>
                {title}
                {console.log(title)}
              </Link>
            </OnePosition>
          );
        }
        return ret;
      })}
    </TitleMenuStyle>
  );
}
