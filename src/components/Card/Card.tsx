import { Pokemon } from '../../types';
import StatList from '../Stats/StatList';
import styled from 'styled-components';
import WearFilter from './wear.png';
import { getGradientForType } from '../../utils';
import CardHeader from './CardHeader';
import TypeTag from './TypeTag';
import { MouseEvent } from 'react';

interface CardProps {
  pokemon?: Pokemon;
  isActiveCard?: boolean;
  isChosen?: boolean;
  hoverIcon?: string;
  rotation?: number;
  onClick?: (e: MouseEvent) => void;
}

interface CardBodyProps {
  isActiveCard: boolean;
  rotation: number;
  isChosen: boolean;
}

const Card = ({
  pokemon,
  rotation,
  onClick,
  isActiveCard,
  isChosen,
  hoverIcon,
}: CardProps) => {
  if (pokemon) {
    let gradientValueForType = getGradientForType(pokemon.types[0].type.name);
    let typeIcons = pokemon.types.map((type) => (
      <TypeTag
        gradientBackground={getGradientForType(type.type.name)}
        type={type.type.name}
        key={type.type.name}
      />
    ));
    return (
      <StyledCardWrapper
        onClick={onClick}
        isActiveCard={isActiveCard || false}
        isChosen={isChosen || false}
        rotation={rotation || 0}
      >
        <CardHeader
          image={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          gradientBackground={gradientValueForType}
        />
        <TypeIconsWrapper>{typeIcons}</TypeIconsWrapper>
        <WearOverlay wearImage={WearFilter} />
        <StatList stats={pokemon.stats} />
        <ClickOverlay
          hoverIcon={hoverIcon || ''}
          isChosen={isChosen || false}
        />
      </StyledCardWrapper>
    );
  }
  return <p>No pokemon fetched</p>;
};
export default Card;

const TypeIconsWrapper = styled.div`
  width: 100%;
  margin: -20px 10px 0 0;
  display: flex;
  justify-content: flex-end;
  & > * {
    margin: 5px;
  }
`;

const ClickOverlay = styled.div<{ isChosen: boolean; hoverIcon: string }>`
  &::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.hoverIcon});
    background-position: center center;
    background-size: 150px;
    background-repeat: no-repeat;
  }
  filter: opacity(0);
  z-index: 2;
  height: 525px;
  width: 330px;
  position: absolute;
  background-color: ${(props) => (props.isChosen ? '#8a2424' : '#16b718')};
`;

const WearOverlay = styled.div<{ wearImage: string }>`
  mix-blend-mode: multiply;
  filter: opacity(0.8);
  height: 525px;
  width: 330px;
  position: absolute;
  background-image: url(${(props) => props.wearImage});
  background-size: 330px 525px;
`;

const StyledCardWrapper = styled.div<CardBodyProps>`
  transform: rotate(${(props) => props.rotation}deg);
  z-index: ${(props) => (props.isActiveCard ? 1 : 0)};
  filter: brightness(${(props) => (props.isActiveCard ? 1 : 0.3)})
    blur(${(props) => !props.isActiveCard && '3px'});
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #d8d8d8;
  color: #272727;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
  height: 525px;
  min-width: 330px;
  border-radius: 25px;

  // Shine-effect
  transition: 0.3s;
  &::before {
    width: 50px;
    height: 525px;
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    filter: blur(30px);
    transform: translateX(-60px) skewX(-20deg);
    transition: 0.3s;
  }
  &::after {
    width: 30px;
    height: 525px;
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    filter: blur(10px);
    transform: translateX(-120px) skewX(-20deg);
    transition: 0.3s;
  }
  &:hover {
    transform: scale(1.1)
      rotate3d(1, 2, 2, ${(props) => props.isActiveCard && 20}deg);
    cursor: pointer;
    ${ClickOverlay}{
      filter: opacity(0.8);
    }
    &::before,
    &::after {
      transform: translateX(100px) skewX(-20deg);
    }
  }
`;
