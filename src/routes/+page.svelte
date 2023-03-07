<script lang="ts">
	import Header from '../lib/Header.svelte';
	import GuessBox from '../lib/GuessBox.svelte';
	import Hints from '../lib/Hints.svelte';
	// @ts-ignore
	import Confetti from 'svelte-confetti';

	import type { PageData } from './$types';

	let hints: Hints;
	let guessbox: GuessBox;
	let confettiTime = false;

	let guesses = 0;
	let hintnumber = 1;
	const endGame = (e: CustomEvent<{ won: boolean }>) => {
		if (e.detail.won) {
			hints.setStatus('fa-regular fa-face-laugh-beam', true);
			confettiTime = true;
		}
		guessbox.disable();
	};

	export let data: PageData;
</script>

<div class="wrapper">
	<Header {guesses} {hintnumber} />
	<!-- in guessbox, -->
	<GuessBox on:success={endGame} word={data.word} bind:this={guessbox} bind:guesses />
	<!-- in hints, we need to change the button icon -->
	<Hints on:success={endGame} bind:this={hints} {data} bind:hintnumber />

	{#if confettiTime}
		<div
			style="
	position: fixed;
	top: -10px;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	overflow: hidden;
	pointer-events: none;"
		>
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
</style>
