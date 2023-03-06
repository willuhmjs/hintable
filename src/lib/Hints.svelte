<style>
    #hintbutton {
        background-color: #fff2bf;
        width: 100%;
        margin: .5rem 0;
        box-sizing: border-box;
        padding: .6rem;
        border-radius: 10px;
        border: 1px solid slategray;
        font-size: 1.8rem;
    }

    .hintbox {
        background-color: #fff2bf;
        width: 100%;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid slategray;
        font-size: 1rem;
        margin: .5rem 0;
    }

    .hintbox p {
        display: inline-block;
        margin-left: 1rem;
    }

</style>
<script lang="ts">
    let hints: string[] = [];
    const getHint = () => {
        hints = [...hints, `hint ${hints.length+1}`]
    }
</script>

<button id="hintbutton" on:click={getHint}><i class="fa-regular fa-lightbulb"></i></button>
{#if hints.length > 0}
    {#each hints.reverse() as hint}
        <div class="hintbox">
            <p>{hints.indexOf(hint)+1}</p>
            <p class="hinttext">{hint}</p>
        </div>
    {/each}
{/if}