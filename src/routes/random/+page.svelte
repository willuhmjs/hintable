<script lang="ts">
	import Game from '$lib/Game.svelte';
	import words from '$lib/data/words.json';
</script>

<Game data={words[Math.floor(Math.random() * words.length)]} />
