<script>
	import Fa from 'svelte-fa'
	import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
	
</script>

<div id="wrapper"  style="top: 12px; left: 0;">
	<ul>
		<li>
            <a class="menubutton">
			<Fa style="width: 22px; height: 22px" icon={faXTwitter} />
            </a>
		</li>
		<li>
            <a class="menubutton">

			<Fa style="width: 22px; height: 22px" icon={faXTwitter} />
            </a>
		</li>
        <li>
            <a class="menubutton">

			<Fa style="width: 22px; height: 22px" icon={faXTwitter} />
            </a>
		</li>
        <li>
            <a class="menubutton">

			<Fa style="width: 22px; height: 22px" icon={faXTwitter} />
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
</style>
