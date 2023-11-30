<script lang="ts">
	import { ended, gameStats, won, type GameStat } from './gameState';
	import Fa from 'svelte-fa';
	import { faBackward, faFlag } from '@fortawesome/free-solid-svg-icons';
	export let word: string;
	const giveUp = () => {
		if (!$ended) {
			$ended = true;
			$won = false;
			const game = $gameStats.find((game: GameStat) => game.word === word);
			if (!game) {
				$gameStats = [
					...$gameStats,
					{
						word,
						hintsLeft: -1
					}
				];
			}
		}
	};
</script>

<div id="wrapper" style="top: 10px; right: 180px;">
	<ul>
		<li>
			<button on:click={giveUp} class="menubutton"
				><Fa fw="true" style="margin-right: 8px" icon={faFlag} />Give Up</button
			>
		</li>
		<li>
			<a href="/menu" class="menubutton"
				><Fa fw="true" style="margin-right: 8px" icon={faBackward} />Previous Games</a
			>
		</li>
	</ul>
</div>

<style>
	#wrapper {
		position: relative;
		background-color: white;
		border: 1px solid transparent;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		width: 205px;
		z-index: 1;
	}

	#wrapper ul {
		list-style: none;
		margin: 0;
		padding: 8px;
	}

	#wrapper li {
		border: 1px solid transparent;
		border-radius: 7px;
		font-size: 17px;
		font-weight: bold;
	}

	#wrapper li:hover {
		background-color: #f5f2e4;
		border: 1px solid #ddd;
	}

	.menubutton {
		color: #333;
		text-decoration: none;
		display: block;
		padding: 0.5rem;
		border: none;
		background: none;
		font-size: inherit;
		font-family: inherit;
		color: inherit;
		font-weight: bold;
		width: 100%;
		text-align: left;
	}
</style>
