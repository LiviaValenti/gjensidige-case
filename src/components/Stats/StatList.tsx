import { Fragment } from 'react';
import styled from 'styled-components';
import { Stat } from '../../types';
import Meter from './Meter';

function getTopStatValue(statName: string) {
  switch (statName) {
    case 'hp':
      return 255;
    case 'attack':
      return 190;
    case 'defense':
      return 250;
    case 'special-attack':
      return 194;
    case 'special-defense':
      return 250;
    case 'speed':
      return 200;
  }
  return 0;
}

function shortenStatName(statName: string) {
  if (statName === 'special-attack') {
    return 'Sp.Atk';
  } else if (statName === 'special-defense') {
    return 'Sp.Def';
  }
  return statName;
}

const Stats = ({ stats }: { stats: Stat[] }) => {
  if (stats) {
    const statList = stats.map((stat) => (
      <Fragment key={stat.stat.name}>
        <p>{shortenStatName(stat.stat.name)}</p>
        <StyledMeter
          value={stat.base_stat}
          max={getTopStatValue(stat.stat.name)}
        />
      </Fragment>
    ));
    return <StatsWrapper>{statList}</StatsWrapper>;
  }
  return <p>Loading stats...</p>;
};
export default Stats;

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 150px;
  grid-template-rows: auto;
  text-transform: capitalize;
  & p {
    margin: 5px;
    text-align: right;
    align-self: center;
    font-weight: 500;
  }
`;

const StyledMeter = styled(Meter)`
  align-self: center;
`;
