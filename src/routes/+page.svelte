<script lang="ts">
	import Game from '../lib/Game.svelte';
	import words from '../data/words';
</script>
<svelte:head>
	<title>hintable - an exciting word guessing game (#{words.length})</title>
    <meta name="title" content="hintable - an exciting word guessing game (#{words.length})" />
    <meta property="og:title" content="hintable - an exciting word guessing game (#{words.length})" />
    <meta property="twitter:title" content="hintable - an exciting word guessing game (#{words.length})" />
</svelte:head>
<Game data={words[words.length - 1]} />
