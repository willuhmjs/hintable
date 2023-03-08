<script lang="ts">
	let wrapper;
</script>

<div id="wrapper" bind:this={wrapper} style="top: 10px; right: 160px;">
	text!
	<br />
	<br />
	more text
</div>

<style>
	#wrapper {
		position: relative;
		background-color: white;
		border: 1px solid black;
		width: 175px;
	}
</style>
