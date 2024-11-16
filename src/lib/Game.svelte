<script lang="ts">
	import Header from './Header.svelte';
	import GuessBox from './GuessBox.svelte';
	import Hints from './Hints.svelte';

	import { ended, usedLifeline, won, type Word } from '$lib/utils';

	import Confetti from 'svelte-confetti';

	$ended = false;
	$won = false;
	$usedLifeline = false;
	let guesses = 0;
	let hintnumber = 4;
	let noHints = false;
	$: if ($ended) {
		noHints = true;
	}

	export let data: Word;
</script>

<div class="wrapper">
	<Header {guesses} word={data.word} />
	<GuessBox word={data.word} bind:guesses />
	<!-- in hints, we need to change the button icon -->
	<Hints {noHints} {data} bind:hintnumber />

	{#if $won}
		<div class="confettibox">
			<Confetti
				x={[-5, 5]}
				y={[0, 0.1]}
				delay={[500, 2000]}
				infinite
				duration="5000"
				amount="300"
				fallDistance="100vh"
			/>
		</div>
	{/if}
</div>

<style>
	.wrapper {
		max-width: 480px;
		margin: auto;
		padding: 1rem;
	}

	.confettibox {
		position: fixed;
		top: -10px;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;
	}
</style>
