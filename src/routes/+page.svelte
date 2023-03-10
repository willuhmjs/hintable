<script lang="ts">
	import Game from '../lib/Game.svelte';
	import GameMenu from '../lib/GameMenu.svelte';
	import { inGameMenu } from "../lib/gameState";
	import { page } from '$app/stores';

	import words from '../data/words';
	import { onMount } from 'svelte';
	let intQuery: number;

	const newGame = (url: URL) => {
		let query: string = '' + url.searchParams.get('game');
		if (query === 'random') {
			intQuery = Math.floor(Math.random() * words.length);
		} else if (words[parseInt(query) - 1]) {
			intQuery = parseInt(query) - 1;
		} else {
			intQuery = words.length - 1;
		}
		// do not let the game load until we update intQuery
		// even if player is not in the menu anymore
		$inGameMenu = false;
	}
	$: newGame($page.url);

</script>
{$inGameMenu}
{#if intQuery !== undefined && !$inGameMenu}
	<Game data={words[intQuery]} />
{:else if inGameMenu}
	<GameMenu />
{/if}
