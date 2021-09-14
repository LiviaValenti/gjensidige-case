import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Pokemon } from '../../types';
import { fetchPokemon } from '../../utils';
import Card from '../Card/Card';

interface FavoritePokemonProps {
  favoritePokemon: Pokemon[];
  setFavoritePokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

const CardDeck = ({
  favoritePokemon,
  setFavoritePokemon,
}: FavoritePokemonProps) => {
  const [pokemonNumber, setPokemonNumber] = useState<number>(1);
  const [currentPokemon, setPokemon] = useState<Pokemon>();
  const [previousPokemon, setPreviousPokemon] = useState<Pokemon>();
  const [nextPokemon, setNextPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchPokemon(pokemonNumber).then((res) => setPreviousPokemon(res));
    fetchPokemon(pokemonNumber + 1).then((res) => setPokemon(res));
    fetchPokemon(pokemonNumber + 2).then((res) => setNextPokemon(res));
  }, [pokemonNumber]);
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
      {pokemonNumber === 1 ? (
        <>
          <Card
            rotation={0}
            isActiveCard
            pokemon={previousPokemon}
            hoverIcon={'/images/plus-circle-fill.svg'}
            onClick={() => {
              previousPokemon && addToFavoritePokemon(previousPokemon);
            }}
          />
          <Card
            rotation={20}
            pokemon={currentPokemon}
            hoverIcon={'/images/right-arrow.svg'}
            onClick={() => {
              setPokemonNumber((prev) => prev + 1);
            }}
          />
        </>
      ) : pokemonNumber === 150 ? (
        <>
          <Card
            rotation={20}
            pokemon={currentPokemon}
            hoverIcon={'/images/left-arrow.svg'}
            onClick={() => {
              setPokemonNumber((prev) => prev - 1);
            }}
          />
          <Card
            rotation={0}
            isActiveCard
            pokemon={nextPokemon}
            hoverIcon={'/images/plus-circle-fill.svg'}
            onClick={() => {
              nextPokemon && addToFavoritePokemon(nextPokemon);
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
              pokemonNumber !== 1 && setPokemonNumber((prev) => prev - 1);
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
              pokemonNumber < 151 && setPokemonNumber((prev) => prev + 1);
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
