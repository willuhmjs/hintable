<script lang="ts">
	let wrapper;
</script>

<div id="wrapper" bind:this={wrapper} style="top: 10px; right: 160px;">
	<ul>
		<li><a href="/"><i class="fa-duotone fa-flag"></i>Give Up</a></li>
		<li><a href="/"><i class="fa-duotone fa-backward"></i>Previous Games</a></li>
	</ul>
</div>

<style>
	#wrapper {
		position: relative;
		background-color: white;
		border: 1px solid transparent;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		width: 185px;
	}

	#wrapper ul {
		list-style: none;
		margin: 0;
		padding: 8px;
		font-size: 17px;
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

	#wrapper li a i {
		margin-right: 0.65rem;
	}
</style>
