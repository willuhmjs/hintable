<svelte:head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

        html,
        body {
            margin: 0;
            padding: 0;
            background-color: #fffaf2;
            touch-action: manipulation;
            font-family: Montserrat, sans-serif;
            color: #002147;
        }
    </style>
    <!-- Primary Meta Tags -->

    <meta
        name="description"
        content="Can you guess a word with just five hints? Try this exciting game and put your vocabulary to the test!"
    />
    <meta name="theme-color" content="#fffaf2" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://willuhmjs.github.io/hintable/" />

    <meta
        property="og:description"
        content="Can you guess a word with just five hints? Try this exciting game and put your vocabulary to the test!"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://willuhmjs.github.io/hintable/" />

    <meta
        property="twitter:description"
        content="Can you guess a word with just five hints? Try this exciting game and put your vocabulary to the test!"
    />
</svelte:head>
<slot/>