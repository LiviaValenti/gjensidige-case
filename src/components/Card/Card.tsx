import { Pokemon } from '../../types';
import StatList from '../Stats/StatList';
import styled from 'styled-components';
import { getGradientForType } from '../../utils';
import CardHeader from './CardHeader';
import TypeTag from './TypeTag';

interface CardProps {
  pokemon?: Pokemon;
}

const Card = ({ pokemon }: CardProps) => {
  if (pokemon) {
      // Base gradient on first selected type
      let gradientValueForType = getGradientForType(pokemon.types[0].type.name);
      let typeList = pokemon.types.map(type => <TypeTag gradientBackground={getGradientForType(type.type.name)} type={type.type.name}/>);
    return (
      <StyledCardWrapper>
        <CardHeader
          image={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          gradientBackground={gradientValueForType}
        />
        <Types>{typeList}</Types>

        <StatList stats={pokemon.stats} />
      </StyledCardWrapper>
    );
  }
  return <p>No pokemon fetched...</p>;
};
export default Card;

const Types = styled.div`
    width: 100%;
    margin: -19px 10px 0 0;
    display: flex;
    justify-content: flex-end;
    & > * {
        margin: 5px;
    }
`

const StyledCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #d8d8d8;
  color: #272727;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
  height: 525px;
  width: 330px;
  border-radius: 25px;
  font-family: 'Poppins', sans-serif;
  // Shine-effect
  transition: 0.3s;
  &::before {
    width: 50px;
    height: 525px;
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    filter: blur(50px);
    transform: translateX(-100px) skewX(-20deg);
    transition: 0.3s;
  }
  &::after {
    width: 30px;
    height: 525px;
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    filter: blur(10px);
    transform: translateX(-200px) skewX(-20deg);
    transition: 0.3s;
  }
  &:hover {
    transform: scale(1.1) rotate3d(1, 2, 2, 20deg);
    cursor: pointer;
    &::before,
    &::after {
      transform: translateX(100px) skewX(-20deg);
    }
  }
`;
