<script lang="ts">
	import Game from '$lib/Game.svelte';
	import MetaTags from '$lib/MetaTags.svelte';
	export let data;
</script>

<MetaTags description={data.game.hintDb[0] + " Can you guess what I am with just a few hints?"}/>

<Game data={data.game} />
