<script lang="ts">
	import Game from '$lib/Game.svelte';
	// import words from '$lib/data/words.json';
	import MetaTags from '$lib/MetaTags.svelte';
	import type { Difficulty } from '$lib/types';
	export let data: { game: { hintDb: string[], word: string, difficulty: Difficulty, day: string } };
	let error: undefined | string;
	let id: number;
</script>

<MetaTags description={data.game.hintDb[0] + " Can you guess what I am with just a few hints?"}/>

{#if error}
	<h1>{error}</h1>
{:else}
	<Game data={data.game} />
{/if}
