<script>
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import ShareButton from '/src/lib/components/ShareButton.svelte'; 

  let htmlContent = '';
  const essayDate = 'Jul 21, 2022'; // Replace with dynamic date if needed

  onMount(async () => {
    // Fetch the markdown file based on the current route, for example
    const response = await fetch(`/content/dont-die.md`);
    const markdown = await response.text();
    htmlContent = marked(markdown);
  });
</script>

<div class="essay-header">
  <div class="essay-metadata">
    <span class="essay-date">{essayDate}</span>
    <img src="/oscar.png" alt="Oscar" class="oscar-icon">
  </div>
</div>

<article class="essay-content">
  {@html htmlContent}
</article>

<style>

  .essay-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 0;
  }

  .oscar-icon {
    width: 50px; /* Adjust to your preference */
    height: auto;
    border-radius: 50%; /* Circular icon */
    margin-right: 10px;
  }

  .essay-metadata {
    display: flex;
    align-items: center;
    margin-left: 20px; 
    margin-right: 30px; 
  }

  .essay-date {
    font-weight: bold;
    margin-right: 10px; 
  }

  /* Styles for article content */
  :global(.essay-content) {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  :global(.essay-content ol li + li) {
    margin-top: -0.8em; /* Adds some space between list items */
  }

  :global(.essay-content img + em, .essay-content img + i) {
    display: block;
    text-align: center;
    color: #999; /* Makes the text fainter */
    margin-top: 0.5em;
  }

  :global(.essay-content h2, .essay-content h3) {
    margin-top: 1em; /* Reduce the top margin */
    margin-bottom: 1em; /* Reduce the bottom margin */
    line-height: 1.2; /* Tightens the line spacing within headers */
  }

  :global(.essay-content a) {
    color: #613b16; /* Sets the link color */
    text-decoration: none; 
  }

  /* Hover styles for links */
  :global(.essay-content a:hover) {
    color: #b08048; /* Sets the link color on hover */
    text-decoration: underline; /* Underlines the link on hover */
  }


  :global(.essay-content img) {
    max-width: 600px;
    width: 100%;
    height: auto;
    max-height: none;
  }

  /* Add additional styles for markdown HTML elements as needed */
</style>