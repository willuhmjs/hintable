<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faShuffle,
		faFaceGrinStars,
		faFaceSadCry,
		faHome,
		faLifeRing
	} from '@fortawesome/free-solid-svg-icons';
	import { gameStats, usedLifeline, type GameStat } from '$lib/utils';
	import MetaTags from '$lib/MetaTags.svelte';
	export let data;
	let words = data.games;
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


<MetaTags/>

<div class="wrapper">
	<h2 class="score">
		{$gameStats.reduce(
			(acc, stat) => acc + calculatePoints(stat) - (stat.usedLifeline ? 100 : 0),
			0
		)} points
	</h2>
	<div class="mainMenuBtns">
		<a class="button randombutton" href={`/`}><Fa style="width: 100%" icon={faHome} /></a>
		<a class="button randombutton" href={`/random`}><Fa style="width: 100%" icon={faShuffle} /></a>
	</div>

	{#each words.sort((a, b) => b.day.getTime() - a.day.getTime()) as word, i}
		{@const inverseIndex = words.length - i - 1}

		{@const userWordStat = $gameStats.find((game) => game.word === word.word)}
		<div class="box">
			<a
				class="button"
				href={`/${inverseIndex + 1}`}
				style="background-color: var(--{word.difficulty}, #808080);"
				on:mouseenter={() => (showDate = word.day.getTime())}
				on:mouseleave={() => (showDate = 0)}
				>
				{#if showDate == word.day.getTime()}
					<b>{new Date(word.day).toLocaleDateString(undefined, { timeZone: 'UTC' })}</b>
				{:else}
					<b>#{inverseIndex + 1}</b>
				{/if}
				<div class="wordRightInfo">
					<div class="wordRightInfoIcons">
						{#if userWordStat}
							{#if userWordStat?.usedLifeline}
								<Fa fw="true" icon={faLifeRing} />
							{/if}
							{#if userWordStat.hintsLeft >= 0}
								<Fa fw="true" icon={faFaceGrinStars} />
							{:else if userWordStat.hintsLeft === -1}
								<Fa fw="true" icon={faFaceSadCry} />
							{/if}
						{/if}
					</div>
					{word.difficulty}
				</div>
			</a>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		max-width: 480px;
		margin: auto;
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

	.mainMenuBtns {
		display: flex;
		gap: 0.35rem;
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

	.wordRightInfo {
		text-align: right;
		display: flex;
		align-items: center;
		justify-content: right;
		gap: 5px;
	}

	.wordRightInfoIcons {
		display: flex;
		max-width: fit-content;
		gap: 2px;
	}
</style>
