<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-center">
		<img
			class="w-48"
			src={data.pokeImgUrl}
			style="image-rendering: pixelated;"
			alt={data.pokeName}
		/>
		<div class="flex flex-col justify-start">
			<h2 class="text-xl">
				Pokemon: {`${data.pokeName.substr(0, 1).toUpperCase()}${data.pokeName.substring(1)}`}
			</h2>
			<ul>
				<li>Attack: {1}</li>
			</ul>
		</div>
	</div>
	<div class="grid grid-cols-2 text-center">
		<div>
			{#if data.hasPrev}
				<a href={`${data.pokeId - 1}`}>Previous Pokemon</a>
			{/if}
		</div>
		<div>
			{#if data.hasNext}
				<a href={`${data.pokeId + 1}`}>Next Pokemon</a>
			{/if}
		</div>
	</div>
</div>
