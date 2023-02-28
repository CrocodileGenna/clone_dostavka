import {
  OneCardStyled,
  ImageInCard,
  NamePoisition,
  Description,
  ButtonPrice,
  Massa,
  Size,
} from './styled/OneCard.styled';

export function OneCard({ prop }) {
  const { img, name, text, price, mass, size } = prop;
  return (
    <OneCardStyled>
      <ImageInCard src={img && img} alt={name && name} />
      <NamePoisition>{name && name}</NamePoisition>
      <Description>{text && text}</Description>
      <Size>{size && <span>Размер: {size}</span>}</Size>
      <Massa>{mass && <span>Вес: {mass}</span>}</Massa>
      <ButtonPrice>{price && price}</ButtonPrice>
    </OneCardStyled>
  );
}
