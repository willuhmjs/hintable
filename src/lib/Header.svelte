<script lang="ts">
	import Menu from './Menu.svelte';
	import Share from './Share.svelte';
	import Fa from 'svelte-fa';
	import { faEllipsisVertical, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
  
	export let guesses = 0;
	export let hintnumber = 4;
	let menuActivated = false;
	let shareActivated = false;
  </script>
  
  <div>
	<div class="titlebox">
	  <button class="headerbutton" 
	  on:click={() => (shareActivated = !shareActivated)}>
		<Fa icon={faShareFromSquare} pull="left" fw=true id="shareIcon" style="transform:translate(-5px, -0.28em); text-align: center; padding: 7px; border-radius: 50%; width: 100%; height: 100%;" class="{shareActivated ? 'headerbuttonactive' : ''}" />
		{#if shareActivated}
		  <Share />
		{/if}
	</button>
	  <h2 class="title" aria-label="title"><span id="glow">hint</span>able</h2>
	  <button class="headerbutton" on:click={() => (menuActivated = !menuActivated)}>
		<Fa icon={faEllipsisVertical} fw=true id="headerIcon" style="transform:translateY(-0.28em); text-align: center; padding: 7px; border-radius: 50%; width: 100%; height: 100%;" class="{menuActivated ? 'headerbuttonactive' : ''}" />
		{#if menuActivated}
		  <Menu />
		{/if}
	  </button>
	</div>
  </div>
  
  <div class="databox">
	<h3>hints remaining: {hintnumber}</h3>
	<h3>guesses: {guesses}</h3>
  </div>
  
  <style>
	.titlebox {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-bottom: -0.8rem;
	  margin-top: -0.8rem;
	}
  
	.title {
	  font-size: 2rem;
	  text-align: center;
	  flex-grow: 1;
	  margin-left: 35px;
	  margin-right: 35px;
	}
  
	.headerbutton {
	  all: unset;
	  display: inline;
	  position: relative;
	  right: 0;
	  top: 0;
	  font-size: 22px;
	  width: 25px;
	  height: 25px;
	}
  
	:global(#shareIcon:hover),
	:global(#headerIcon:hover),
	:global(.headerbuttonactive) {
	  cursor: pointer;
	  background-color: #f5f2e4;
	}
  
	#glow {
	  transition: color 0.25s ease-in-out;
	}
  
	.databox {
	  display: flex;
	  justify-content: space-between;
	}
  </style>