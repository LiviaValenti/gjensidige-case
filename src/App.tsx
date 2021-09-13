import { useEffect, useState } from 'react';
import { fetchPokemon } from './utils';
import { Pokemon } from './types';
import styled from 'styled-components';

import InfoContainer from './components/InfoContainer';

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchPokemon('bulbasaur').then((res) => setPokemon(res));
  }, []);

  return (
    <StyledAppRoot>
      <InfoContainer pokemon={pokemon} />
    </StyledAppRoot>
  );
};

export default App;

const StyledAppRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #123456;
`;