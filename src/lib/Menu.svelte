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

	#wrapper ul {
		list-style: none;
		margin: 0;
		padding: 8px;
		font-size: 18px;
		font-weight: bold;
	}

	#wrapper li {
		border: 1px solid transparent;
		border-radius: 7px;
	}

	#wrapper li:hover {
		background-color: #f5f5f5;
		border: 1px solid #ddd;
	}

	#wrapper li a {
		color: #333;
		text-decoration: none;
		display: block;
		padding: .5rem;
	}
</style>
