<script lang="ts">
	import { goto } from '$app/navigation';
    import words from '../data/words';

	const getButtonColor = (difficulty: 'easy' | 'medium' | 'hard') => {
		switch (difficulty) {
			case 'easy':
				return '#b2f2af';
			case 'medium':
				return ' #f2e8af';
			case 'hard':
				return '#f2afaf';
		}
	}
</script>

<div class="wrapper">
	<button class="button randombutton" on:click={() => goto(`?game=random`)}><i class="fa-solid fa-shuffle"></i></button>
    {#each words as _, index}
		{@const reverseIndex = words.length - 1 - index}
		{@const word = words[reverseIndex]}
        <div class="box">
            <button class="button" on:click={() => goto(`?game=${reverseIndex+1}`)} style="background-color: {getButtonColor(word.difficulty)};">
				<b>#{reverseIndex+1}</b> 
				<span style="text-align: right">{word.difficulty}</span>
			</button>
        </div>
    {/each}
</div>

<style>
    .wrapper {
		max-width: 480px;
		margin: auto;
		padding: 1rem;
		margin: 2rem auto;
	}

    .box {
		width: 100%;
		box-sizing: border-box;
		border: 1px solid transparent;
		font-size: 1rem;
		margin: 0.35rem 0;
        background-color: transparent;
		word-break: break-all;
	}

    .button {
		background-color: #ffe1b8;
        border: none;
        padding: 15px;
        font-size: 20px;
		width: 100%;
		text-align: left;
		border-radius: 10px;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
		display: flex;
	}

	.randombutton {
		margin-bottom: 1rem;
		text-align: center;
	}

	.button * {
		flex: 1;
	}

    .button:hover {
		cursor: pointer;
		filter: brightness(95%);
	}

	.button:active {
		filter: brightness(90%);
	}

	@media (max-width: 485px) {
		.wrapper {
			margin: 2rem 2rem;
		}
	}
</style>