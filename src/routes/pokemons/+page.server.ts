import { ALL_MONS } from "../../data/pokemon";
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = () => {

  const pokemonList = ALL_MONS.map((name, index) => ({
    pokeName: name,
    // imageUrl: `/api/image/${index + 1}.png`,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }))

  return {
    pokemonList
  }
}