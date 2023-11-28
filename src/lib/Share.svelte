<script lang="ts">
	import Fa from 'svelte-fa'
	import { faTwitterSquare, faFacebookSquare, faLinkedin, faTumblrSquare } from '@fortawesome/free-brands-svg-icons'
	import { ended, won } from './gameState';
	import words from "../data/words";
	let text: string;
   $: if ($ended && $won) {
	text = `hintable #${words.findIndex((element) => element.word === word) + 1} ${"💡".repeat(hintnumber)}`
   } else {
	text= 'Play hintable, an exciting word guessing game!'
   }
</script>

<div id="wrapper"  style="top: 12px; left: 0;">
	<ul>
		<li>
            <a class="menubutton" href="https://twitter.com/intent/tweet?url={location.href}&text={text}">
				<Fa icon={faTwitterSquare} fw=true />
            </a>
		</li>
		<li>
            <a class="menubutton" href="https://www.facebook.com/sharer/sharer.php?u={location.href}">
			<Fa  icon={faFacebookSquare}  fw=true />
            </a>
		</li>
        <li>
            <a class="menubutton" href="http://www.linkedin.com/shareArticle?mini=true&url={location.href}&title={text}">
			<Fa  icon={faLinkedin} fw=true />
            </a>
		</li>
        <li>
            <a class="menubutton" href="http://www.tumblr.com/share?v=3&u={location.href}&t={text}">
			<Fa  icon={faTumblrSquare} fw=true />
            </a>
		</li>
	</ul>
</div>

<style>
	#wrapper {
		position: relative;
		background-color: white;
		border: 1px solid transparent;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		width: 205px;
		z-index: 1;
		display: flex;
		justify-content: start;
    }

    #wrapper ul {
    list-style: none;
    margin: 0;
    padding: 8px;
    display: flex;
	justify-content: space-around;
}

	#wrapper li {
		border: 1px solid transparent;
		border-radius: 50%;
		font-size: 17px;
		font-weight: bold;
	}

	#wrapper li:hover {
		background-color: #f5f2e4;
		border: 1px solid #ddd;
	}

	.menubutton {
		color: #333;
		text-decoration: none;
		display: block;
		padding: 0.5rem;
		border: none;
		background: none;
		font-size: inherit;
		font-family: inherit;
		color: inherit;
		font-weight: bold;
		text-align: left;
	}

	.menubutton :global(svg) {
		font-size: 23px;
	}
</style>
