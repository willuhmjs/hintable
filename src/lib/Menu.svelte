<script>
	import { ended, won } from './gameState';

	const giveUp = () => {
		$ended = true;
		$won = false;
	};
</script>

<div id="wrapper" style="top: 10px; right: 180px;">
	<ul>
		<li>
			<button on:click={giveUp} class="menubutton"><i class="fa-duotone fa-flag" />Give Up</button>
		</li>
		<li>
			<a href="/hintable/menu" class="menubutton"
				><i class="fa-duotone fa-backward" />Previous Games</a
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

	.menubutton i {
		margin-right: 0.65rem;
	}
</style>
