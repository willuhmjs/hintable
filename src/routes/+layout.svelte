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
			background-color: #fffaf2;
			touch-action: manipulation;
			font-family: 'Montserrat Variable', sans-serif;
			color: #002147;
		}
	</style>
</svelte:head>
<slot></slot>
