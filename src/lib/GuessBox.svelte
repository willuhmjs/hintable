<script lang="ts">
	import { won, ended } from './utils';
	import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
	export let word: string;
	export let guesses = 0;
	import Fa from 'svelte-fa';

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

<form on:submit|preventDefault={submitGuess} class={isAnswerIncorrect ? 'incorrect' : ''}>
	<input
		type="text"
		autocorrect="off"
		autocapitalize="off"
		bind:value={guess}
		id="guessInput"
		bind:this={guessInput}
		autocomplete="off"
		placeholder="type a word"
	/>
	<button class="submitBtn"><Fa icon={faRightToBracket}/></button>
</form>

<style>
	form {
		display: flex;
		margin-bottom: 1rem;
	}

	.submitBtn {
		margin: 0;
		box-sizing: border-box;
		padding: 1rem;
		border-radius: 0 10px 10px 0;
		border: 1px solid slategray;
		font-size: 1.5rem;
		text-transform: lowercase;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
		border-left: none;
		color: var(--text);
		background-color: var(--secondary);
	}

	.submitBtn:hover {
		cursor: pointer;
		filter: brightness(95%);
	}
	
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
		border-right: none;
		box-sizing: border-box;
		padding: 1rem;
		border: 1px solid slategray;
		border-radius: 10px 0 0 10px;
		font-size: 1.5rem;
		text-transform: lowercase;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
	}
</style>
