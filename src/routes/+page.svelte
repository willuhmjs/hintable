<script lang="ts">
	import Game from '../lib/Game.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import words from '../data/words';
	let intQuery: number;

	onMount(() => {
		let query: string = '' + $page.url.searchParams.get('game');
		if (query === 'random') {
			intQuery = Math.floor(Math.random() * words.length);
		} else if (words[parseInt(query) - 1]) {
			intQuery = parseInt(query) - 1;
		} else {
			intQuery = words.length - 1;
		}
	});
</script>

{#if intQuery !== undefined}
	<Game data={words[intQuery]} />
{/if}
