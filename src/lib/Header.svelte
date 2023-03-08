<script lang="ts">
	import Menu from './Menu.svelte';
	export let guesses = 0;
	export let hintnumber = 4;
	let menuActivated = false;
</script>
<div>
<div class="titlebox">
	<h2 class="title"><span id="glow">hint</span>able</h2>
	<div id="menubutton" on:click={() => (menuActivated = !menuActivated)}>
		<i class="fa-solid fa-ellipsis-vertical {menuActivated ? "menubuttonactive" : ""}" />
		{#if menuActivated}
			<Menu/>
		{/if}
	</div>
</div>
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
		margin-bottom: -0.8rem;
		margin-top: -0.8rem;
	}

	.title {
		font-size: 2rem;
		text-align: center;
		font-style: italic;
		flex-grow: 1;
		margin-left: 35px;
	}

	#menubutton {
		display: inline;
		position: relative;
		right: 0;
		top: 0;
		margin: 10px;
		font-size: 22px;
		width: 25px;
		height: 25px;
	}
	#menubutton i {
		text-align: center;
		padding: 5px;
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}

	#menubutton i:hover, .menubuttonactive {
		cursor: pointer;
		background-color: #f5f2e4;
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
