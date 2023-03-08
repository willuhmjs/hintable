<script lang="ts">
	export let guesses = 0;
	export let hintnumber = 4;
</script>

<div class="titlebox">
	<h2 class="title"><span id="glow">hint</span>able</h2>
	<span class="menubutton"><i class="fa-solid fa-ellipsis-vertical" /></span>
</div>
<div class="databox">
	<h3>hints remaining: {hintnumber}</h3>
	<h3>guesses: {guesses}</h3>
</div>

<style>
	.titlebox {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		font-size: 2rem;
		text-align: center;
		font-style: italic;
		flex-grow: 1;
		margin-left: 37.5px;
	}

	.menubutton {
		text-align: right;
		display: inline;
		position: relative;
		right: 0;
		top: 0;
		padding: 16px;
		font-size: 22px;
	}

	#glow:hover {
		color: gold;
	}

	#glow {
		transition: color 0.25s ease-in-out;
	}

	.databox {
		display: flex;
		justify-content: space-between;
	}
</style>
