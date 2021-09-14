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
  const gradientMap = new Map([
    ['normal', `${rotation}deg, #A8A878 ${sizeLeft}% ,#645D23 ${sizeRight}%`],
    ['fire', `${rotation}deg, #F08030 ${sizeLeft}% ,#a04009 ${sizeRight}%`],
    ['water', `${rotation}deg, #49b9db ${sizeLeft}% ,#2249A8 ${sizeRight}%`],
    ['grass', `${rotation}deg, #50ec65 ${sizeLeft}% ,#26a822 ${sizeRight}%`],
    ['electric', `${rotation}deg, #eeca2c ${sizeLeft}% ,#c0a114 ${sizeRight}%`],
    ['ice', `${rotation}deg, #5eb8d3 ${sizeLeft}% ,#27bdc2 ${sizeRight}%`],
    ['fighting', `${rotation}deg, #f87a7a ${sizeLeft}% ,#c23838 ${sizeRight}%`],
    ['poison', `${rotation}deg, #A040A0 ${sizeLeft}% ,#660c66 ${sizeRight}%`],
    ['ground', `${rotation}deg, #b1a434 ${sizeLeft}% ,#908542 ${sizeRight}%`],
    ['flying', `${rotation}deg, #c580fd ${sizeLeft}% ,#8138d4 ${sizeRight}%`],
    ['psychic', `${rotation}deg, #d4259f ${sizeLeft}% ,#e68b24 ${sizeRight}%`],
    ['bug', `${rotation}deg, #b4e21f ${sizeLeft}% ,#88a52a ${sizeRight}%`],
    ['rock', `${rotation}deg, #88835b ${sizeLeft}% ,#6e6b54 ${sizeRight}%`],
    ['ghost', `${rotation}deg, #611bb1 ${sizeLeft}% ,#44384e ${sizeRight}%`],
    ['dark', `${rotation}deg, #58452c ${sizeLeft}% ,#2f2114 ${sizeRight}%`],
    ['dragon', `${rotation}deg, #6e28dd ${sizeLeft}% ,#4f1bdd ${sizeRight}%`],
    ['steel', `${rotation}deg, #b8b8b8 ${sizeLeft}% ,#777777 ${sizeRight}%`],
    ['fairy', `${rotation}deg, #f3bbfa ${sizeLeft}% ,#ce61c8 ${sizeRight}%`],
  ]);

  return gradientMap.get(type) || '230deg, #252525 10%, #666666 80%'
};
