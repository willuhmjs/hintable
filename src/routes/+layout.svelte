<script>
	import "../app.pcss";
    import '@fontsource-variable/montserrat';
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
<slot></slot>
