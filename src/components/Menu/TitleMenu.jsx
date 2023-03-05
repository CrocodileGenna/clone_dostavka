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
              <Link href={title}>{title}</Link>
            </OnePosition>
          );
        }
        return ret;
      })}
    </TitleMenuStyle>
  );
}
//  if (!renderedTypes.has(title)) {
//    renderedTypes.add(title);
//    return (
//      <OnePosition key={title}>
//        <Link href={title}>{title}</Link>
//      </OnePosition>
//    );
//  }
