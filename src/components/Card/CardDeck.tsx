import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Pokemon } from '../../types';
import { fetchPokemon } from '../../utils';
import Card from '../Card/Card';

interface FavoritePokemonProps {
  favoritePokemon: Pokemon[];
  setFavoritePokemon: Dispatch<SetStateAction<Pokemon[]>>;
}

const CardDeck = ({
  favoritePokemon,
  setFavoritePokemon,
}: FavoritePokemonProps) => {
  const [currentPokemonNumber, setPokemonNumber] = useState<number>(1);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>();
  const [previousPokemon, setPreviousPokemon] = useState<Pokemon>();
  const [nextPokemon, setNextPokemon] = useState<Pokemon>();

  useEffect(() => {
    currentPokemonNumber > 1 && fetchPokemon(currentPokemonNumber - 1).then((res) => setPreviousPokemon(res));
    fetchPokemon(currentPokemonNumber).then((res) => setCurrentPokemon(res));
    currentPokemonNumber < 150 &&fetchPokemon(currentPokemonNumber + 1).then((res) => setNextPokemon(res));
  }, [currentPokemonNumber]);

  const addToFavoritePokemon = (pokemon: Pokemon) => {
    // Add if max 3 not reached and pokemon does not exist in favorites already
    if (
      favoritePokemon.length < 3 &&
      !favoritePokemon.some((card) => card.name === pokemon.name)
    ) {
      setFavoritePokemon((prev) => [...prev, pokemon]);
    }
  };

  return (
    <CardsWrapper>
      {currentPokemonNumber === 1 ? (
        <>
          <Card
            rotation={0}
            isActiveCard
            pokemon={currentPokemon}
            hoverIcon={'/images/plus-circle-fill.svg'}
            onClick={() => {
              currentPokemon && addToFavoritePokemon(currentPokemon);
            }}
          />
          <Card
            rotation={20}
            pokemon={nextPokemon}
            hoverIcon={'/images/right-arrow.svg'}
            onClick={() => {
              setPokemonNumber((prev) => prev + 1);
            }}
          />
        </>
      ) : currentPokemonNumber === 150 ? (
        <>
          <Card
            rotation={20}
            pokemon={previousPokemon}
            hoverIcon={'/images/left-arrow.svg'}
            onClick={() => {
              setPokemonNumber((prev) => prev - 1);
            }}
          />
          <Card
            rotation={0}
            isActiveCard
            pokemon={currentPokemon}
            hoverIcon={'/images/plus-circle-fill.svg'}
            onClick={() => {
              currentPokemon && addToFavoritePokemon(currentPokemon);
            }}
          />
        </>
      ) : (
        <>
          <Card
            rotation={-20}
            pokemon={previousPokemon}
            hoverIcon={'/images/left-arrow.svg'}
            onClick={() => {
              currentPokemonNumber !== 1 &&
                setPokemonNumber((prev) => prev - 1);
            }}
          />
          <Card
            isActiveCard
            pokemon={currentPokemon}
            hoverIcon={'/images/plus-circle-fill.svg'}
            onClick={() => {
              currentPokemon && addToFavoritePokemon(currentPokemon);
            }}
          />
          <Card
            rotation={20}
            pokemon={nextPokemon}
            hoverIcon={'/images/right-arrow.svg'}
            onClick={() => {
              currentPokemonNumber < 151 &&
                setPokemonNumber((prev) => prev + 1);
            }}
          />
        </>
      )}
    </CardsWrapper>
  );
};
export default CardDeck;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;
`;
