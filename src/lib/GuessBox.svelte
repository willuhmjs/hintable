<script lang="ts">
	let isAnswerIncorrect = false;
	const submitGuess = (e: SubmitEvent) => {
		e.preventDefault();
		/* please shut up typescript */
		if (!isAnswerIncorrect) {
			isAnswerIncorrect = true;
			setTimeout(() => isAnswerIncorrect = false, 700);
		}
	};
</script>

<form id="guessForm" on:submit={submitGuess}>
	<input type="text" class="guessInput {isAnswerIncorrect ? "incorrect" : ""}" id="guessInput" autocomplete="off" placeholder="type a word" />
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
	}

	#guessForm {
		margin-bottom: 1rem;
	}
</style>
