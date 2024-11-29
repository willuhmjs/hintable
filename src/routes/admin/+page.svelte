<script lang="ts">
    export let data;
</script>
<a href="/admin/backup">Backup</a>

<form method="POST" action="?/time">
    <input name="days" id="days" type="number" placeholder="days">
    <button>submit</button>
</form>

<form method="POST" action="?/bulk">
    <textarea name="words" id="words" placeholder="words" cols="30" rows="10"></textarea>
    <button>submit</button>
</form>

<form method="POST" action="?/single">
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
<form method="POST" action="?/backup">
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

<style>
    a {
        padding: 0.5rem;
        border: 1px solid black;
        background-color: white;
        color: black;
        display: inline-block;
    }
</style>