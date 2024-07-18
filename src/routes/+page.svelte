<script lang="ts">
	import Game from '$lib/Game.svelte';
	import words from '$lib/data/words.json';
</script>

<Game data={words.toSorted((a,b) => a.day - b.day)[words.length - 1]} />
