<script lang="ts">
	import words from '$lib/data/words.json';
	
	import Fa from 'svelte-fa';
	import { faShuffle, faFaceGrinStars, faFaceSadCry } from '@fortawesome/free-solid-svg-icons';
	import { gameStats, type GameStat } from '$lib/utils';

	export const calculatePoints = (gameStat: GameStat): number => {
		switch (gameStat.hintsLeft) {
			case 4:
				return 1000;
			case 3:
				return 750;
			case 2:
				return 500;
			case 1:
				return 250;
			case 0:
				return 100;
			case -1:
				return 0;
		}
	};

	let showDate = 0;
</script>

<div class="wrapper">
	<h2 class="score">{$gameStats.reduce((acc, stat) => acc + calculatePoints(stat), 0)} points</h2>
	<a class="button randombutton" href={`/random`}><Fa style="width: 100%" icon={faShuffle} /></a>
	{#each words as word, index}
		{@const userWordStat = $gameStats.find((game) => game.word === word.word)}
		<div class="box">
			<a
				class="button"
				href={`/${index + 1}`}
				style="background-color: var(--{word.difficulty}, #808080);"
				on:mouseenter={() => showDate = word.day}
			>
			{#if showDate == word.day}
					<b>{new Date(word.day).toLocaleDateString()}</b>
			{:else}
				<b>#{index + 1}</b>
			{/if}
				<span style="text-align: right"
					>{#if userWordStat}
						{#if userWordStat.hintsLeft >= 0}
							<Fa fw="true" icon={faFaceGrinStars} />
						{:else if userWordStat.hintsLeft === -1}
							<Fa fw="true" icon={faFaceSadCry} />
						{/if}
					{/if}
					{word.difficulty}</span
				>
			</a>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		max-width: 480px;
		margin: auto;
		/* padding 1 everywhere except top */
		padding: 0 1rem 1rem 1rem;
		margin: 2rem auto;
	}

	.box {
		width: 100%;
		border: 1px solid transparent;
		font-size: 1rem;
		margin: 0.35rem 0;
		background-color: transparent;
		word-break: break-all;
	}

	.button {
		background-color: var(--secondary);
		box-sizing: border-box;
		border: none;
		padding: 15px;
		font-size: 20px;
		width: 100%;
		text-align: left;
		border-radius: 10px;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
		display: flex;
		text-decoration: none;
		color: inherit;
	}

	.randombutton {
		margin-bottom: 1rem;
	}
	.button * {
		flex: 1;
	}

	.button:hover {
		cursor: pointer;
		filter: brightness(95%);
	}

	.button:active {
		filter: brightness(90%);
	}

	.score {
		margin-top: 0;
		text-align: center;
	}

	@media (max-width: 485px) {
		.wrapper {
			margin: 2rem 2rem;
		}
	}
</style>
