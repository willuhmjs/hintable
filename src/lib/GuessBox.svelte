<script lang="ts">
	import { won, ended } from './utils';
	export let word: string;
	export let guesses = 0;

	let guessInput: HTMLInputElement;
	let guess: string = '';
	let isAnswerIncorrect = false;

	$: if ($ended) {
		guessInput.disabled = true;
		guessInput.value = word;
	}

	const submitGuess = () => {
		if (!guess || (guess = guess.replaceAll(' ', '')).length === 0 || isAnswerIncorrect) return;
		guesses++;
		if (guess.toLowerCase() !== word) {
			if (!isAnswerIncorrect) {
				isAnswerIncorrect = true;
				guess = '';
				setTimeout(() => (isAnswerIncorrect = false), 700);
			}
		} else if (guess.toLowerCase() == word) {
			$ended = true;
			$won = true;
		}
	};
</script>

<form on:submit|preventDefault={submitGuess}>
	<input
		type="text"
		autocorrect="off"
		autocapitalize="off"
		bind:value={guess}
		id="guessInput"
		class={isAnswerIncorrect ? 'incorrect' : ''}
		bind:this={guessInput}
		autocomplete="off"
		placeholder="type a word"
	/>
</form>

<style>
	@keyframes shake {
		0% {
			transform: translateX(0);
		}
		10%,
		90% {
			transform: translateX(-8px);
		}
		20%,
		80% {
			transform: translateX(8px);
		}
		30%,
		50%,
		70% {
			transform: translateX(-8px);
		}
		40%,
		60% {
			transform: translateX(8px);
		}
		100% {
			transform: translateX(0);
		}
	}

	.incorrect {
		animation: shake 0.7s ease-in-out;
	}

	#guessInput {
		width: 100%;
		margin: 0;
		box-sizing: border-box;
		padding: 1rem;
		border-radius: 10px;
		border: 1px solid slategray;
		font-size: 1.5rem;
		margin-bottom: 1rem;
		text-transform: lowercase;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
	}
</style>
