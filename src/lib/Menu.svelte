<script lang="ts">
	let wrapper;
</script>

<div id="wrapper" bind:this={wrapper} style="top: 10px; right: 160px;">
	<ul>
		<li><a href="/">Give Up</a></li>
		<li><a href="/">Previous Games</a></li>
	</ul>
</div>

<style>
	#wrapper {
		position: relative;
		background-color: white;
		border: 1px solid transparent;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		width: 175px;
	}

	a {
		width: 100%;
		border: 0;
	}
</style>
