<script lang="ts">
	const submitGuess = (e: SubmitEvent) => {
		e.preventDefault();
		/* please shut up typescript */
		/* @ts-ignore */
		const guess = document.getElementById('guessInput').value;
	};
</script>

<form id="guessForm" on:submit={submitGuess}>
	<input type="text" class="guessInput" id="guessInput" placeholder="type a word" />
</form>

<style>
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
