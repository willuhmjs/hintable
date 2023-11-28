<script lang="ts">
	import Game from '$lib/Game.svelte';
	import words from '../../data/words';
</script>

<svelte:head>
	<title>hintable - an exciting word guessing game</title>
    <meta name="title" content="hintable - an exciting word guessing game" />
    <meta property="og:title" content="hintable - an exciting word guessing game" />
    <meta property="twitter:title" content="hintable - an exciting word guessing game" />
</svelte:head>

<Game data={words[Math.floor(Math.random() * words.length)]} />
