<script lang="ts">
    export let data;
</script>

<form method="POST" action="?/manual">
    <textarea name="words" id="words" placeholder="words" cols="30" rows="10"></textarea>
<button>submit</button>
</form>

{#each data.items as game} 
<div>{game.word}</div>
{/each}