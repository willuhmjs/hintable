<script>
	import { page } from '$app/stores';
    import {
		faFaceGrinStars,
		faFaceSadCry,
		faFaceSadTear,
		faLightbulb,
	} from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';
    export let data;
</script>

<div class="flex">
    <div class="wrapper">
        <div style={`position: absolute; text-align: center; height: 5rem; background-color: #fffaf2; justify-content: center; display: flex; align-items: center; left: 35%; width: 5rem; top: 6rem; z-index:1000;`}>
        
        <h1 style="font-size: 5rem;">{data.game.id}</h1>
        </div>
        <h1 class="display"><Fa icon={faLightbulb}/></h1>
        <h1 style="margin-top: -1.7rem;" class="date">
        {new Date(data.game?.day).toLocaleDateString("USA")}
        </h1>
    </div>
</div>

<style>
    .display {
        font-size: 15rem;
    }

    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
	.wrapper {
        transform: scale(1.3);
		max-width: 480px;
		margin: auto;
        position: relative;
		padding: 2rem;
		text-align: center;
		font-family: 'Montserrat Variable', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
	}

    .date {
        font-size: 2.5rem;
        margin: 0;
    }

	h1 {
		font-size: 2rem;
		margin: 0;
	}
</style>
