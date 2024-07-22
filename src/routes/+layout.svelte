<script>
	import '../app.pcss';
	import { theme } from '$lib/utils';
	import '@fontsource-variable/montserrat';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		theme.subscribe((value) => {
			document.documentElement.setAttribute('data-theme', value);
		});

	});



</script>

<svelte:head>
	<style>
		html,
		body {
			margin: 0;
			padding: 0;
			background-color: var(--primary);
			touch-action: manipulation;
			font-family: 'Montserrat Variable', sans-serif;
			color: var(--text);
		}
	</style>
</svelte:head>
<slot />
