
<script>

  const featuredEssay = {
    title: "Swarm Intelligence: How Agents Will Accelerate Research",
    date: "Feb 2024",
    url: "/essays/agent-swarms"
  };

  const essays = [
    { title: "Pervasive Intelligence Systems: Learning to Live with AGI", date: "Apr 2023", url: "/essays/pervasive-intelligence" },
    { title: "Three Stages of AGI", date: "Apr 2023", url: "/essays/three-stages-of-agi" },
    { title: "When Freemium Goes Too Far", date: "Mar 2023", url: "/essays/freemium" },
    { title: "The Threat of Automation (A Study)", date: "Mar 2023", url: "https://medium.com/@oscarmoxon/the-threat-of-automation-an-economic-perspective-fd26f716b5db" },
    { title: "The Holy Grail of Invention", date: "Oct 2022", url: "/essays/holy-grail" },
    { title: "Live Long Enough to Live Forever", date: "Jul 2022", url: "/essays/dont-die" },
    { title: "Myths, Memes and Uncertainty", date: "Jul 2022", url: "/essays/myths-memes-uncertainty" },
  ];

</script>

<div class="central-column">

  <p class="intro">Making some of my essays available here.</p>
  
  <a href={featuredEssay.url} class="featured-essay-link">
    <div class="featured-essay">
      <img src="/star.png" alt="Featured" class="featured-icon">
      <div class="divider"></div>
      <div class="essay-content">
        <span class="essay-title">{featuredEssay.title}</span>
        <span class="essay-date">{featuredEssay.date}</span>
      </div>
    </div>
  </a>

  <br>

  <p class="recommendation">
    If you're not sure which to read, try 
    <a href="/essays/dont-die" class="essay-recommendation-link">Live Long Enough to Live Forever</a>, 
    <a href="/essays/myths-memes-uncertainty" class="essay-recommendation-link">Myths, Memes & Uncertainty</a>, or 
    <a href="/essays/holy-grail" class="essay-recommendation-link">The Holy Grail of Invention</a>.
  </p>

  <div class="essays-container">
    {#each essays as { title, date, url }, index}
      {#if url.startsWith('http')}
        <a href={url} target="_blank" rel="noopener noreferrer" class="essay-link">
          <div class="essay-rectangle">
            <span class="essay-title">{title}</span>
            <span class="essay-date">{date}</span>
          </div>
        </a>
      {:else}
        <a href={url} class="essay-link">
          <div class="essay-rectangle">
            <span class="essay-title">{title}</span>
            <span class="essay-date">{date}</span>
          </div>
        </a>
      {/if}
    {/each}
  </div>
</div>

<style>

  .central-column {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0 auto; /* Center the column */
  }

  .essays-container {
    display: flex;
    flex-direction: column;
  }

  .essay-rectangle {
    display: flex;
    justify-content: space-between; /* Align title to the left, date to the right */
    align-items: center;
    width: 600px; /* Fixed width of rectangle */
    padding: 0.5rem; /* Padding inside the rectangle */
    box-sizing: border-box;
    border-left: none;
    border-right: none;
    background-color: #ece2d8;
    border-top: 1px solid #bd9a78; /* Sample border, adjust as needed */
    white-space: nowrap; /* Prevents wrapping of content */
    overflow: hidden; /* Hide overflow */
    text-overflow: ellipsis; /* Ellipsis for text that overflows */
  }

  .featured-essay {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Center items vertically */
    width: 600px;
    height: 4rem; /* Twice the height of regular essays */
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: #e5bb93; /* Slightly different to stand out */
    border: 1px solid #bd9a78; /* Consistent with other essays */
    border-radius: 0px; /* Optional: adds rounded corners */
  }

  .featured-icon {
    margin-right: 0rem; /* Space between icon and title */
    width: 24px; /* Adjust based on actual icon size */
    height: auto;
    margin-left:10px;
  }

  .featured-essay-link {
    text-decoration: none; /* Removes underline from the link */
    color: inherit; /* Inherits the text color from parent */
    display: block; /* Makes the link block-level to encompass the featured essay */
  }
  .featured-essay-link:hover .featured-essay {
    background-color: #d09e6e; /* Example lighter background color on hover */
    cursor: pointer; /* Changes the cursor to indicate it's clickable */
  }

  .featured-essay-link:hover .essay-title,
  .featured-essay-link:hover .essay-date {
    color: #a48267; /* Example lighter text color */
  }

  .divider {
    background-color: #bd9a78;
    width: 1px;
    height: 50%; /* Divider height, adjust as needed */
    opacity: 0; /* Faint visibility */
    margin-right: 1rem; /* Space after the divider */
  }

  .essay-content {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: space-between;
    width: 600px; /* Take up remaining space */
  }

  .essay-rectangle.last {
    border-bottom: 1px solid #bd9a78; /* Bottom border for the last essay */
  }

  .essay-title {
    flex-grow: 1; /* Allow the title to take up available space */
    margin-right: 1rem; /* Space between title and date */
  }

  .essay-date {
    flex-shrink: 0; /* Prevent the date from shrinking */
  }
  .essay-link, .featured-essay-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .essay-link:hover .essay-rectangle, .featured-essay-link:hover .featured-essay {
    background-color: #e3cbb8; /* Lighter background on hover */
  }

  .essay-link:hover .essay-title, .essay-link:hover .essay-date,
  .featured-essay-link:hover .essay-title, .featured-essay-link:hover .essay-date {
    color: #a48267; /* Lighter text color on hover */
  }
  
</style>