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
        <div style="position: absolute; text-align: center; height: 5rem; justify-content: center; display: flex; align-items: center; left: 50%; transform: translateX(-50%); top: 6rem; z-index: 1000;">
        
        <h1 style="font-size: 3.5rem;">{data.game.id}</h1>
        </div>
        <h1 class="display">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="fill: currentColor; width: 15rem; height: 15rem; margin: 0; margin-bottom: -2rem;">
              <path d="M 297.2 248.9 C 311.6 228.3 320 203.2 320 176 C 320 105.3 262.7 48 192 48 C 121.3 48 64 105.3 64 176 C 64 203.2 72.4 228.3 86.8 248.9 C 90.5 254.2 94.9 260.2 99.6 266.6 C 112.5 284.3 127.9 305.5 139.4 326.4 C 149.8 345.4 155.1 365.2 157.7 383.9 L 109 384 C 106.8 372 103.1 360.3 97.2 349.5 C 87.3 331.5 75 314.6 62.7 297.7 C 57.5 290.6 52.3 283.5 47.3 276.3 C 27.6 247.9 16 213.3 16 176 C 16 78.8 94.8 0 192 0 C 289.2 0 368 78.8 368 176 C 368 213.3 356.4 247.9 336.6 276.3 C 331.6 283.5 326.4 290.6 321.2 297.7 C 308.9 314.5 296.6 331.4 286.7 349.5 C 280.8 360.3 277.1 372 274.9 384 L 226.3 384 C 228.9 365.3 234.2 345.4 244.6 326.5 C 256.1 305.6 271.5 284.4 284.4 266.7 C 289.1 260.3 293.4 254.3 297.1 249 Z M 192 512 C 147.8 512 112 476.2 112 432 L 112 416 L 272 416 L 272 432 C 272 476.2 236.2 512 192 512 Z"/>
            </svg></h1>
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
