<script>
  // Assume the current URL is what you want to share
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Text to share
  const textToShare = 'Check out this essay!';

  async function shareContent() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: textToShare,
          url: currentUrl
        });
        // Handle success
        console.log('Content shared successfully');
      } catch (error) {
        // Handle errors
        console.error('Error sharing content', error);
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      // You could copy the URL to clipboard or display a modal with share options
      console.error('Web Share API is not supported in this browser.');
      copyToClipboard(currentUrl);
        if (success) {
            // Show message if URL was copied successfully
            showMessage('Copied to clipboard');
        } else {
            // Show message if copying to clipboard failed
            showMessage('Failed to copy to clipboard');
        }
    }
  }

    async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('URL copied to clipboard:', text);
        // You can optionally display a notification to the user that the URL has been copied
    } catch (error) {
        console.error('Error copying URL to clipboard:', error);
        // Handle errors, such as displaying an error message to the user
    }
}

function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('copy-message');
    document.body.appendChild(messageElement);
    setTimeout(() => {
      document.body.removeChild(messageElement);
    }, 2000); // Remove the message after 2 seconds
  }


</script>

<button on:click={shareContent} class="share-button">
  Share
</button>

<style>
  .share-button {
    /* Add your styles for the share button here */
    padding: 0.5em 1em;
    background: #f2f2f2;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  
  .share-button:hover {
    background: #e2e2e2;
  }
</style>
