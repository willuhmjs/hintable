<script lang="ts">
	export let endGame: (won: boolean) => void;
	let word = 'hint';
	let hintDb = [
		"I start with the letter 'h'.",
		'I am four letters long.',
		"'Why won't you just give me a ______?!'",
		'I am a discreet cue that can help point someone in the right direction.',
        "I am in the name of this website."
    ];
	let hints: string[] = [];
	let hintButton: HTMLButtonElement;
	let hintIcon: HTMLElement;
	let lastHint: boolean = false;
	const getHint = () => {
		if (hints.length == hintDb.length-1) {
			setStatus("fa-regular fa-face-sad-tear", false);
		} else if (hints.length == hintDb.length) {
			lastHint = true;
			hintButton.disabled = true;
			endGame(false);
			return;
		}
		hints = [`${hintDb[hints.length]}`, ...hints];
	};

	export const setStatus = (className: string, disabled: boolean) => {
		hintIcon.className = className;
		hintButton.disabled = disabled;
	}
</script>

<button id="hintbutton" on:click={getHint} bind:this={hintButton}><i bind:this={hintIcon} class="fa-regular fa-lightbulb" /></button>
{#if lastHint}
	<div id="hint-5" class="hintbox">
		<p class="hinttext">I am <b>{word}</b>. Thanks for playing!</p>
	</div>
{/if}
{#if hints.length > 0}
	{#each hints as hint}
		<div class="hintbox">
			<p class="hinttext">{hint}</p>
		</div>
	{/each}
{/if}

<style>
	#hintbutton {
		background-color: #f5f2e4;
		width: 100%;
		margin: 0.5rem 0;
		box-sizing: border-box;
		padding: 0.6rem;
		border-radius: 10px;
		border: 1px solid transparent;
		font-size: 1.8rem;
		color: black;
	}

	.hintbox {
		background-color: #f5f2e4;
		width: 100%;
		box-sizing: border-box;
		border-radius: 10px;
		border: 1px solid transparent;
		font-size: 1rem;
		margin: 0.3rem 0;
	}

	#hintbutton:disabled {
		color: #b3b3b3;
	}

	#hintbutton:hover:enabled {
		cursor: pointer;
		filter: brightness(95%);
	}

	#hintbutton:active:enabled {
		filter: brightness(90%);
	}

	.hintbox p {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	#hint-5 {
		background-color: lightyellow;
		width: 100%;
		box-sizing: border-box;
		border-radius: 10px;
		border: 1px solid transparent;
		font-size: 1rem;
		margin: 0.3rem 0;
	}
</style>
