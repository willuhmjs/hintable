<script lang="ts">
	import { onMount } from 'svelte';
	import { ended, won } from './gameState';
	import type { Word } from './word';
	import { faFaceLaughBeam, faFaceSadCry, faFaceSadTear, faLightbulb, type IconDefinition } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';
	export let data: Word;
	const { word, hintDb } = data;

	let hints: hintDb = [];
	export let hintnumber: number;
	$: hintnumber = hintDb.length - hints.length;
	let hintButton: HTMLButtonElement;
	export let noHints = false;

	$: if ($ended) {
		noHints = true;
		hintButton.disabled = true;
		if ($won) {
			setStatus(faFaceLaughBeam, true);
		} else if (!$won) {
			setStatus(faFaceSadCry, true);
		}
	}

	const getHint = () => {
		if (hints.length == hintDb.length - 1) {
			setStatus(faFaceSadTear, false);
		} else if (hints.length == hintDb.length) {
			$ended = true;
			$won = false;
			return;
		}
		hints = [hintDb[hints.length], ...hints];
	};

	let icon = faLightbulb;
	const setStatus = (_icon: IconDefinition, disabled: boolean) => {
		icon = _icon;
		hintButton.disabled = disabled;
	};
	onMount(getHint);
</script>

<button id="hintbutton" on:click={getHint} bind:this={hintButton}
	>
	<Fa icon={icon} />
	</button>
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
		background-color: #ffe1b8;
		width: 100%;
		margin: 0.5rem 0;
		box-sizing: border-box;
		padding: 0.6rem;
		border-radius: 10px;
		border: 1px solid transparent;
		font-size: 1.8rem;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
	}

	#hintbutton:enabled {
		color: black;
	}

	.hintbox {
		background-color: #ffe1b8;
		width: 100%;
		box-sizing: border-box;
		border-radius: 10px;
		border: 1px solid transparent;
		font-size: 1rem;
		margin: 0.35rem 0;
		font-weight: 500;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
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
