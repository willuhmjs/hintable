<script lang="ts">
	export let endGame: (won: boolean) => void;
	export let guesses = 0;
	export const disable = () => {
		guessInput.disabled = true;
		guessInput.value = word;
	};
	let guessInput: HTMLInputElement;
	let word = 'hint';
	let guess: string = "";
	let isAnswerIncorrect = false;
	const submitGuess = (e: SubmitEvent) => {
		e.preventDefault();
		if (guess == "" || guess == null) return;
		guesses++;
		if (guess.toLowerCase() !== word) {
			if (!isAnswerIncorrect) {
				isAnswerIncorrect = true;
				guess = "";
				setTimeout(() => isAnswerIncorrect = false, 700);
			}
		} else if (guess.toLowerCase() == word) {
			endGame(true);
		}
	}
	
</script>

<form on:submit={submitGuess}>
	<input type="text" autocorrect="off" autocapitalize="off" bind:value={guess} class="guessInput {isAnswerIncorrect ? "incorrect" : ""}" bind:this={guessInput} autocomplete="off" placeholder="type a word" />
</form>
<style>
	@keyframes shake {
    0% { transform: translateX(0); }
    10%, 90% { transform: translateX(-8px); }
    20%, 80% { transform: translateX(8px); }
    30%, 50%, 70% { transform: translateX(-8px); }
    40%, 60% { transform: translateX(8px); }
    100% { transform: translateX(0); }
  }

	.incorrect {
	  animation: shake 0.7s ease-in-out;
	}
	
	.guessInput {
		width: 100%;
		margin: 0;
		box-sizing: border-box;
		padding: 1rem;
		border-radius: 10px;
		border: 1px solid slategray;
		font-size: 1.5rem;
		margin-bottom: 1rem;
		text-transform: lowercase;
	}

</style>
