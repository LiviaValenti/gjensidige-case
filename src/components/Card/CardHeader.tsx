import styled from 'styled-components';

interface CardHeaderProps {
  image: string;
  name: string;
  gradientBackground: string;
}

const CardHeader = ({ image, name, gradientBackground }: CardHeaderProps) => {
  return (
    <CardHeaderWrapper gradientBackground={gradientBackground}>
      <PokemonImage src={image} alt={`${name} illustration`} />
      <h1>{name}</h1>
    </CardHeaderWrapper>
  );
};

export default CardHeader;

const PokemonImage = styled.img`
  max-width: 200px;
  max-height: 160px;
  filter: drop-shadow(2px 1px 7px #1414148f);
`;

const CardHeaderWrapper = styled.div<{ gradientBackground: string }>`
  display: grid;
  box-shadow: 0px -15px 10px rgba(0, 0, 0, 0.5);
  grid-template-rows: 185px 30px;
  place-items: center;
  width: 330px;
  height: 230px;
  background: linear-gradient(${(props) => props.gradientBackground});
  & h1 {
    text-transform: capitalize;
    color: white;
  }
`;
