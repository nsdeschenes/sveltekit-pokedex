import { ALL_MONS } from '../../../data/pokemon';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const parsedId = parseInt(params.pokeId, 10);

	if (parsedId <= 0 || parsedId > ALL_MONS.length) {
		throw error(404, 'Pokemon ID out of range');
	}

	const mon = ALL_MONS[parsedId - 1];
	const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
		parsedId
	}.png`;

	return {
		pokeId: parsedId,
		pokeImgUrl: imgUrl,
		pokeName: mon,
		hasNext: parsedId < ALL_MONS.length,
		hasPrev: parsedId > 1
	};
};
