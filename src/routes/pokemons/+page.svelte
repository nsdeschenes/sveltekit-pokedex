<script lang="ts">
	import PokemonCard from '../../components/PokemonCard.svelte';
import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex gap-4">
	<ul>
		{#each data.pokemonList as pokemon, index}
			<li class="hover:border-2 border-gray-300"><PokemonCard pokemon={pokemon} index={index} /></li>
		{/each}
	</ul>
</div>
