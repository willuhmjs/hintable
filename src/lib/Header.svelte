<script lang="ts">
	export let guesses = 0;
	export let hintnumber = 1;
</script>

<h2 class="title">hintable</h2>
<div class="databox">
	<h3>hints: {hintnumber}</h3>
	<h3>guesses: {guesses}</h3>
</div>

<style>
	.title {
		font-size: 2rem;
		text-align: center;
		font-style: italic;
	}

	.databox {
		display: flex;
		justify-content: space-between
	}
</style>
