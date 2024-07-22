<script lang="ts">
    import { type difficulty} from "$lib/utils";
    export let title = 'hintable - an exciting word guessing game';
    export let description = 'Can you guess a word with just five hints? Try this exciting game and put your vocabulary to the test!';
    export let difficulty: difficulty | null = null;


</script>

<svelte:head>

<title>{title}</title>
	<meta name="title" content="hintable - an exciting word guessing game" />
	<meta
		name="description"
		content="{description}"
	/>
	<meta name="theme-color" content="{difficulty || "#fffaf2"}" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://hintable.me" />
	<meta property="og:title" content="hintable - an exciting word guessing game" />
	<meta
		property="og:description"
		content="{description}"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://hintable.me/" />
	<meta property="twitter:title" content="hintable - an exciting word guessing game" />
	<meta
		property="twitter:description"
		content="{description}"
	/>
</svelte:head>