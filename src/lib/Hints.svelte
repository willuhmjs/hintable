<script lang="ts">
	import { ended, won } from "./gameState";

	// totally not bad code :-)
	export let data;
	const { word, hintDb } = data;
	let hints = [hintDb[0]];
	export let hintnumber = 4;
	let hintButton: HTMLButtonElement;
	let hintIcon: HTMLElement;
	export let noHints = false;

	$: if ($ended && $won) {
		setStatus('fa-regular fa-face-laugh-beam', true);
	}

	const getHint = () => {
		if (hints.length == hintDb.length - 1) {
			setStatus('fa-regular fa-face-sad-tear', false);
		} else if (hints.length == hintDb.length) {
			noHints = true;
			hintButton.disabled = true;
			$ended = true;
			$won = false;
			return;
		}
		hintnumber--;
		hints = [hintDb[hints.length].toString(), ...hints];
	};

	const setStatus = (className: string, disabled: boolean) => {
		hintIcon.className = className;
		hintButton.disabled = disabled;
	};
</script>

<button id="hintbutton" on:click={getHint} bind:this={hintButton}
	><i bind:this={hintIcon} class="fa-regular fa-lightbulb" /></button
>
{#if noHints}
	<div id="hint-5" class="hintbox">
		<p class="hinttext">I am "<b>{word}</b>." Thanks for playing!</p>
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
		background-color: #fff3e0;
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
		background-color: #fff3e0;
		width: 100%;
		box-sizing: border-box;
		border-radius: 10px;
		border: 1px solid transparent;
		font-size: 1rem;
		margin: 0.35rem 0;
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

	.hinttext {
		margin-left: 1rem;
		margin-right: 1rem;
		font-size: 1.1rem;
	}

	#hint-5 {
		background-color: #ffebcc;
		width: 100%;
		box-sizing: border-box;
		border-radius: 10px;
		border: 1px solid transparent;
		margin: 0.3rem 0;
	}
</style>
