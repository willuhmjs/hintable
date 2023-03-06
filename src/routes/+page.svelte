<script>
	import Header from '../lib/Header.svelte';
	import GuessBox from '../lib/GuessBox.svelte';
	import Hints from '../lib/Hints.svelte';
</script>

<div class="wrapper">
	<Header />
	<GuessBox />
	<Hints />
</div>

<style>
	.wrapper {
		max-width: 480px;
		margin: auto;
		padding: 1rem;
	}
</style>
