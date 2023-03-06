<script>
    import Header from '../lib/Header.svelte';
    import GuessBox from '../lib/GuessBox.svelte';
    import Hints from '../lib/Hints.svelte';
</script>
<style>
    .wrapper {
        max-width: 480px;
        margin: auto; 
        padding: 1rem;
    }
</style>
<div class="wrapper">
    <Header/>
    <GuessBox/>
    <Hints/>
</div>