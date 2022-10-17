<script lang="ts">
	interface Pokemon {
		pokeName: string;
		imageUrl: string;
	}

	export let pokemon: Pokemon;
	export let index: number;
</script>

<a href={`pokemons/${index + 1}`} class="flex items-center hover:underline cursor-pointer">
	<img src={pokemon.imageUrl} alt={pokemon.pokeName} style="image-rendering: pixelated;" />
	<div>
		Pokemon: {`${pokemon.pokeName.substr(0, 1).toUpperCase()}${pokemon.pokeName.substring(1)}`}
	</div>
</a>
