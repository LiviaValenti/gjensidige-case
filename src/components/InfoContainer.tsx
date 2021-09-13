import React from 'react';
import { Pokemon } from '../types';
import StatList from '../components/Stats/StatList'

interface Props {
  pokemon?: Pokemon;
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className='infoContainer'>
        <StatList stats={pokemon.stats} />
      </div>
    );
  }
  return null;
};
export default InfoContainer;
