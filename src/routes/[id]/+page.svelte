<script lang="ts">
	import Game from '$lib/Game.svelte';
	import words from '$lib/data/words.json';
	import { page } from '$app/stores';

	function checkIfNumber(n: string): boolean {
		return !isNaN(parseInt(n));
	}

	$: stringId = $page.params.id;
	let error: undefined | string;
	let id: number;

	$: if (!checkIfNumber(stringId)) {
		error = 'Invalid game ID - must be a number';
	} else {
		id = parseInt(stringId);
		if (id < 1 || id > words.length) {
			error = 'Invalid game ID - must be between 1 and ' + words.length;
		}
	}
</script>

{#if error}
	<h1>{error}</h1>
{:else}
	<Game data={words.sort((a, b) => a.day - b.day)[id - 1]} />
{/if}
