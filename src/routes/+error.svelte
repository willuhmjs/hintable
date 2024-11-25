<script>
	import { page } from '$app/stores';
    import {
		faFaceGrinStars,
		faFaceSadCry,
		faFaceSadTear,
		faLightbulb,
	} from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';

</script>

<div class="flex">
    <div class="wrapper">
        <h1 class="display"><Fa icon={faFaceSadTear}/></h1>
        <h1>{$page.status}: {$page.error.message}</h1>
    </div>
</div>

<style>
    .display {
        font-size: 8rem;
    }

    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
	.wrapper {
		max-width: 480px;
		margin: auto;
		padding: 2rem;
		text-align: center;
		font-family: 'Montserrat Variable', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
	}

	h1 {
		font-size: 2rem;
		margin: 0;
	}
</style>