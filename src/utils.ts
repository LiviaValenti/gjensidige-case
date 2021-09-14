import { Pokemon } from './types';

/**
 * Returns a Pokémon based on name or number from https://pokeapi.co/
 * @param pokemonId name or number
 * @returns Pokémon
 */
export const fetchPokemon = async (pokemonId: string | number) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then<Pokemon>(
    (res) => {
      const expectedResponseCode = 200;
      if (res.status === expectedResponseCode) {
        return res.json();
      }
      throw new Error(
        `Got HTTP status code ${res.status}, when HTTP status code ${expectedResponseCode} was expected`
      );
    }
  );

/**
 * Returns gradient-values based on Pokémon-type
 * @param type string depicting Pokémon-type
 * @returns gradient values on format (gradient-angle, hex1 colorstop1, hex1 colorstop2)
 */
export const getGradientForType = (type: string) => {
  let rotation: number = 230;
  let sizeLeft: number = 20;
  let sizeRight: number = 80;
  switch (type) {
    case 'normal':
      return (
        `${rotation}deg, #A8A878 ${sizeLeft}% ,#645D23 ${sizeRight}%`
      );
    case 'fire':
      return (
        `${rotation}deg, #F08030 ${sizeLeft}% ,#a04009 ${sizeRight}%`
      );
    case 'water':
      return (
        `${rotation}deg, #49b9db ${sizeLeft}% ,#2249A8 ${sizeRight}%`
      );
    case 'grass':
      return (
        `${rotation}deg, #50ec65 ${sizeLeft}% ,#26a822 ${sizeRight}%`
      );
    case 'electric':
      return (
        `${rotation}deg, #eeca2c ${sizeLeft}% ,#c0a114 ${sizeRight}%`
      );
    case 'ice':
      return (
        `${rotation}deg, #5eb8d3 ${sizeLeft}% ,#27bdc2 ${sizeRight}%`
      );
    case 'fighting':
      return (
        `${rotation}deg, #f87a7a ${sizeLeft}% ,#c23838 ${sizeRight}%`
      );
    case 'poison':
      return (
        `${rotation}deg, #A040A0 ${sizeLeft}% ,#660c66 ${sizeRight}%`
      );
    case 'ground':
      return (
        `${rotation}deg, #b1a434 ${sizeLeft}% ,#908542 ${sizeRight}%`
      );
    case 'flying':
      return (
        `${rotation}deg, #c580fd ${sizeLeft}% ,#8138d4 ${sizeRight}%`
      );
    case 'psychic':
      return (
        `${rotation}deg, #d4259f ${sizeLeft}% ,#e68b24 ${sizeRight}%`
      );
    case 'bug':
      return (
        `${rotation}deg, #b4e21f ${sizeLeft}% ,#88a52a ${sizeRight}%`
      );
    case 'rock':
      return (
        `${rotation}deg, #88835b ${sizeLeft}% ,#6e6b54 ${sizeRight}%`
      );
    case 'ghost':
      return (
        `${rotation}deg, #611bb1 ${sizeLeft}% ,#44384e ${sizeRight}%`
      );
    case 'dark':
      return (
        `${rotation}deg, #58452c ${sizeLeft}% ,#2f2114 ${sizeRight}%`
      );
    case 'dragon':
      return (
        `${rotation}deg, #6e28dd ${sizeLeft}% ,#4f1bdd ${sizeRight}%`
      );
    case 'steel':
      return (
        `${rotation}deg, #b8b8b8 ${sizeLeft}% ,#777777 ${sizeRight}%`
      );
    case 'fairy':
      return (
        `${rotation}deg, #f3bbfa ${sizeLeft}% ,#ce61c8 ${sizeRight}%`
      );
    default:
      return '232.84deg, #252525 10.43%, #666666 78.82%';
  }
};
