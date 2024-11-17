<script lang="ts">
    export let data;
</script>

<form method="POST" action="?/manual">
    <textarea name="words" id="words" placeholder="words" cols="30" rows="10"></textarea>
    <button>submit</button>
</form>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Word</th>
            <th>Hint DB</th>
            <th>Difficulty</th>
            <th>Day</th>
        </tr>
    </thead>
    <tbody>
        {#each data.items as game} 
        <tr>
            <td>{game.id}</td>
            <td>{game.word}</td>
            <td>{game.hintDb.join(', ')}</td>
            <td>{game.difficulty}</td>
            <td>{game.day.toLocaleDateString()}</td>
        </tr>
        {/each}
    </tbody>
</table>