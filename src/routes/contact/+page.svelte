<script>
  function onImageClick() {

  }
</script>

<div class="contact-column">
  <h1></h1>
  <p>For any enquiries, please get in contact via email at:</p>
  
  <a href="mailto:oscar@oscarmoxon.com" class="email-link" on:click={onImageClick}>
    <img src="/contact-email.png" alt="Contact Details Image" class="contact-image" />
  </a>

  <p>Or connect via social media:</p>

  <div class="social-media-links">
    <a href="https://twitter.com/oscarmoxon" target="_blank" rel="noopener noreferrer" class="twitter-icon" aria-label="Twitter">
      <img src="/x-social-media-black-icon.webp" alt="Twitter" />
    </a>
    <a href="https://www.linkedin.com/in/oscarmoxon/" target="_blank" rel="noopener noreferrer" class="linkedin-icon" aria-label="LinkedIn">
      <img src="/11-linkedin-512.webp" alt="LinkedIn" />
    </a>
  </div>

</div>

<style>
  .contact-column {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  .contact-image {
    width: 400px; 
    border-radius: 2%; 
    margin-top: 1px;
    margin-bottom: -2px;
  }

  .email-link {
    display: inline-block; /* Ensures the link is not the full width of its container */
    border-radius: 2%; 
    margin-top: 0px;
    margin-bottom: 0px;
    position: relative; /* Establishes a positioning context */
    overflow: hidden; /* Ensures the background doesn't bleed past the border-radius */
  }

  .email-link:hover .contact-image {
    opacity: 0; /* Makes the image transparent on hover */
  }

  .email-link:hover {
    background-image: url('/contact-email-hov.png'); /* Image shown on hover */
    background-size: cover; /* Ensures the background image covers the whole area */
    background-position: center; /* Ensures the background image is centered */
  }

  .social-media-links a {
    justify-content: center; /* Center the links container */
    display: inline-block;
    margin: 0 10px;
  }

  .twitter-icon, .linkedin-icon {
    /* Styles for the social media icons */
    margin-right: 10px; /* Add space between icons */
  }

  .social-media-links img {
    width: 24px;
    height: 24px;
  }

  .color-test-section {
    padding: 2rem;
    margin-top: 1rem;
    text-align: center;
  }

</style>
