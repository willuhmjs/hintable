<script lang="ts">
    	import type { PageData } from './$types';

        export let data;
</script>

<form method="POST" action="?/manual">
    <input type="text" name="word" id="word" placeholder="word">
    <input type="text" name="hint1" id="hint1" placeholder="hint 1">
    <input type="text" name="hint2" id="hint2" placeholder="hint 2">
    <input type="text" name="hint3" id="hint3" placeholder="hint 3">
    <input type="text" name="hint4" id="hint4" placeholder="hint 4">
    <input type="text" name="hint5" id="hint5" placeholder="hint 5">
    <select name="difficulty" id="difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="expert">Expert</option>
    </select>
    <button>submit</button>
</form>

{#each data.items as game} 
    <div>{game.word}</div>
{/each}