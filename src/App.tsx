import { useState } from 'react';
import { Pokemon } from './types';
import styled, { createGlobalStyle } from 'styled-components';
import FavoritePokemon from './components/Favorite/FavoritePokemon';
import CardDeck from './components/Card/CardDeck';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  height: 100%;

    background: linear-gradient(110deg, #123456 20%, #134e8a 40%, #123456 80%);
  }
`;

const App = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<Pokemon[]>([]);

  return (
    <StyledAppRoot>
      <GlobalStyle />
      <h1>
        Pokemon! Gotta <i>fetch</i> them all
      </h1>
      <h2>Choose 3 favorites by clicking on the cards</h2>
      <CardDeck
        favoritePokemon={favoritePokemon}
        setFavoritePokemon={setFavoritePokemon}
      />
      <FavoritePokemon
        setFavoritePokemon={setFavoritePokemon}
        favoritePokemon={favoritePokemon}
      />
    </StyledAppRoot>
  );
};

export default App;

const StyledAppRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: white;
  & > h1 {
    font-size: 2em;
    margin: 20px 0 0 0;
  }
  & > h2 {
    margin: 0 0 35px 0;
    font-size: 1.3em;
    font-weight: 400;
  }
  @media only screen and (max-width: 1200px) {
    & > h1 {
      font-size: 1.2em;
      margin: 20px 0 0 0;
    }
    & > h2 {
      margin: 0 0 35px 0;
      font-size: 1em;
      font-weight: 400;
    }
  }
`;
