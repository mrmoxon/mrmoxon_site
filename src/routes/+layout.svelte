<script>
  import Header from '$lib/Header.svelte';
</script>

<Header />

<svelte:head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>
  <title>[oscar moxon]</title>
  <link rel='icon' type='image/png' href='/knotonnothing.png'>

  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #fafafa;
    }

    .central-column {
      max-width: 600px; /* or the width you desire */
      margin: 0 auto; /* centers the column */
      padding: 2rem; /* adds some padding around the content */
    }

    .contact-column {
      max-width: 400px; /* or the width you desire */
      margin: 0 auto; /* centers the column */
      padding: 2rem; /* adds some padding around the content */
    }

  </style>
</svelte:head>

<main>
  <slot /> 
</main>
