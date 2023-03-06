<script lang="ts">
	let word = 'hint';
	let hintDb = [
		'I am four letters long.',
		"'Why won't you just give me a ______?!'",
		'I am a discreet cue that can help point someone in the right direction.',
		"I start with the letter 'h'."
	];
	let hints: string[] = [];
	const getHint = () => {
		if (hints.length >= hintDb.length) return alert('No more hints available.');
		hints = [...hints, `${hintDb[hints.length]}`];
	};
</script>

<button id="hintbutton" on:click={getHint}><i class="fa-regular fa-lightbulb" /></button>
{#if hints.length > 0}
	{#each hints as hint}
		<div class="hintbox">
			<p class="hinttext">{hint}</p>
		</div>
	{/each}
{/if}

<style>
	#hintbutton {
		background-color: #fff2bf;
		width: 100%;
		margin: 0.5rem 0;
		box-sizing: border-box;
		padding: 0.6rem;
		border-radius: 10px;
		border: 1px solid slategray;
		font-size: 1.8rem;
	}

	.hintbox {
		background-color: #fff2bf;
		width: 100%;
		box-sizing: border-box;
		border-radius: 10px;
		border: 1px solid slategray;
		font-size: 1rem;
		margin: 0.5rem 0;
	}

	.hintbox p {
		margin-left: 1rem;
	}
</style>
