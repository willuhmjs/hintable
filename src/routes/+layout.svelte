<script>
	import "../app.pcss";
	import { theme } from "$lib/utils";
    import '@fontsource-variable/montserrat';
</script>

<svelte:head>
	<style>
		html,
		body {
			margin: 0;
			padding: 0;
			background-color: var(--primary);
			touch-action: manipulation;
			font-family: 'Montserrat Variable', sans-serif;
			color: var(--text);
		}
	</style>
</svelte:head>
{#if $theme == "light"}
	<style>
		:root {
/* Write your global styles here, in PostCSS syntax */
:root {
    /* only used for background color */
    --primary: #fffaf2;
    /* used for hint button, shuffle colors */
    --secondary: #ffe1b8;
    /* used for menus and inputs */
    --tertiary: white;
    /* used for all text */
    --text: #002147;
    --text-hover: #f5f2e4;

    /* difficulty */
    --easy: #b2f2af;
    --medium: #f2e8af;
    --hard: #f2afaf;
    --expert: #afaff2;

}
		--text-octotrigintenary: #000;
		</style>
{:else}
<style>
	
/* Dark Theme */

:root {
  /* Background color */
  --primary: #1E1E1E;

  /* Button, shuffle colors */
  --secondary: #2F2F2F;

  /* Menus and inputs */
  --tertiary: #333333;

  /* Text color */
  --text: #FFFFFF;

  /* Text hover color */
  --text-hover: #C0C0C0;

    --easy: #2F2F2F;
    --medium: #2F2F2F;
    --hard: #2F2F2F;
    --expert: #2F2F2F;
}
</style>
{/if}
<slot></slot>
