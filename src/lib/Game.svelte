<script lang="ts">
	import Header from './Header.svelte';
	import GuessBox from './GuessBox.svelte';
	import Hints from './Hints.svelte';
	// @ts-ignore
	import Confetti from 'svelte-confetti';

	let hints: Hints;
	let guessbox: GuessBox;
	let confettiTime = false;

	let guesses = 0;
	let hintnumber = 4;
	let noHints = false;
	const endGame = (e: CustomEvent<{ won: boolean }>) => {
		if (e.detail.won) {
			hints.setStatus('fa-regular fa-face-laugh-beam', true);
			confettiTime = true;
		}
		guessbox.disable();
		noHints = true;
	};

	interface Word {
		word: string;
		hintDb: [string, string, string, string, string];
		difficulty: 'easy' | 'medium' | 'hard';
	}
	export let data: Word;
</script>

<div class="wrapper">
	<Header {guesses} {hintnumber} />
	<GuessBox on:endgame={endGame} word={data.word} bind:this={guessbox} bind:guesses />
	<!-- in hints, we need to change the button icon -->
	<Hints on:endgame={endGame} {noHints} bind:this={hints} {data} bind:hintnumber />

	{#if confettiTime}
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
