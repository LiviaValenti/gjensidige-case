import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Pokemon } from '../../types';
import Card from '../Card/Card';

interface FavoritePokemonProps {
  favoritePokemon: Pokemon[];
  setFavoritePokemon: Dispatch<SetStateAction<Pokemon[]>>;
}

const FavoritePokemon = ({
  favoritePokemon,
  setFavoritePokemon,
}: FavoritePokemonProps) => {
  const removeFavoritePokemon = (pokemon: Pokemon) => {
    setFavoritePokemon((prev) => [
      ...prev.filter((card) => card.name !== pokemon.name),
    ]);
  };

  return (
    <FavoritePokemonWrapper>
      {favoritePokemon.length ? (
        favoritePokemon.map((pokemon) => (
          <Card
            isActiveCard
            key={pokemon.name}
            hoverIcon={'/images/trash.svg'}
            isChosen
            pokemon={pokemon}
            onClick={() => removeFavoritePokemon(pokemon)}
          />
        ))
      ) : (
        <p>Click a card to add it as a favorite!</p>
      )}
    </FavoritePokemonWrapper>
  );
};
export default FavoritePokemon;

const FavoritePokemonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: 560px;
  border-radius: 20px;
  box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.6);
  background-color: #312414;
  padding: 10px;
  margin-top: 60px;
  @media only screen and (min-width: 1400px) {
    width: 90%;
  }
  @media only screen and (max-width: 1200px) {
    height: auto;
    width: 100%;
    padding: 20px 0;
  }
  @media only screen and (max-width: 830px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    border-radius: 0;
    padding: 10px 0;
  }
`;
