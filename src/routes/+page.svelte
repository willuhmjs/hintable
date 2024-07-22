<script lang="ts">
	import Game from '$lib/Game.svelte';
	import MetaTags from '$lib/MetaTags.svelte';
	import words from '$lib/data/words.json';
	let word = words.sort((a, b) => a.day - b.day)[words.length - 1]
</script>

<MetaTags description={word.hintDb[0] + " Can you guess what I am with just a few hints?"}/>

<Game data={word} />
