<script>
  // You can add script content here if needed
</script>

<nav class="header">
  <div class="left">
    <a href="/" class="home-link">[oscar moxon]</a>
  </div>
  <div class="center">
    <a href="/essays">[essays]</a>
    <a href="/contact">[contact]</a>
    <a href="/about">[about]</a>
  </div>
  <div class="right">
    <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" class="cv-link">CV</a>
  </div>
</nav>

<style>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fafafa;
    font-family: 'Helvetica Neue', Arial, sans-serif;
  }

  .left, .center, .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    justify-content: flex-start;
  }
  .right {
    justify-content: flex-end;
  }

  .header::before {
    content: '';
    display: block;
  }

  .header::after {
    content: '';
    display: block;
  }

  .home-link {
    text-decoration: none;
    colour: #333;
    padding: 0.5em 1em; /* Adjust padding to your liking */
    border-radius: 0.2em; /* Adjust border-radius for rounded corners */
    display: inline-block; /* Makes the padding and border-radius effective */
    box-sizing: border-box;
    font-size: 1.3rem;
    letter-spacing: -0.05em; /* Adjust this value as needed */
    transition: background-color 0.3s;
    background-color: transparent; /* No background color by default */
  }

  .center a {
    text-decoration: none;
    color: #333;
    margin: 0 1rem; /* Spacing between links */
    padding: 0.5em 1em; /* Optional padding for the links */
    border-radius: 0.2em; /* Optional rounded corners for the links */
  }
  .center a:hover {
    text-decoration: underline;
  }

  .home-link:hover {
    background-color: #f0f0f0; /* Slightly darker on hover; adjust as needed */
  }

  .home-link:visited, .home-link:active {
    color: #333; /* Keeps the color consistent for visited and active states */
  }

  .cv-link {
    text-decoration: none;
    color: #333;
    margin: 0 1rem;
    padding: 0.5em 1em;
    border-radius: 0.2em;
  }

  .cv-link:hover {
    background-color: #f0f0f0; /* Slightly darker on hover; adjust as needed */
  }


</style>
