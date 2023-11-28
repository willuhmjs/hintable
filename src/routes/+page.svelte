<script lang="ts">
	import Game from '../lib/Game.svelte';
	import words from '../data/words';
</script>

<Game data={words[words.length - 1]} />
