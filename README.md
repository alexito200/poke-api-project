<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#pokejs">Poke.js</a></li>
        <li><a href="#poke-homehtml">Poke-Home.html</a></li>
        <li><a href="#poke-searchhtml">Poke-Search.html</a></li>
        <li><a href="#poke-detailshtml">Poke-Details.html</a></li>
        <li><a href="#searchcss">Search.css</a></li>
      </ul>
    </li>
</details>

<!-- USAGE EXAMPLES -->
## Usage

This section will give an explanation of the inner workings of the app
### Poke.js
The poke.js file is started by fetching the data from the Poke API. The async function takes in an id as the input. With that id, it fetches the pokemon's data. I want to know if the
data retrieval was successful so I include a (!response.ok) inside an if statement. If data retrieval is not successful, an error message is printed out. An event listener is added
and attached to a 'DOMContentLoaded' event. Another event listener is attached to the element with id 'searchButton' that executes when clicked. The code is set up to validate the 
input and attach it to the URL. The next two lines declare variables that will parse the URL to search for the id string. Then, we have the code to display all the information fetched
from the API. We grab the name, image, and the stats to display on the page.

### Poke-Home.html
The poke-home.html file is a simple hero image of the original 151 pokemon with a jumbotron container. The container includes text and a search button that takes the user to the
poke-search.html page.

### Poke-Search.html
The poke-search.html file is also a simple page that includes an input field with a search button. The detail of this page is a flying lugia that was made by animating a sprite sheet.
The sheet consists of 10 frames and they are scaled and animated to present one frame at a time. The animation is set to infinite so it never ends.

### Poke-Details.html
The poke-details.html file is the page where the fetched data for the pokemon is displayed. The image is empty because the js code fetches the image from the API and inserts it into
the src attribute of the image element. A lot of the other HTML code is inserted using .innerHTML and .textContent.

### Search.css
Search.css is highlighted here out of the two CSS files for the simple fact that I learned how to animate a sprite sheet and I wanted to highlight some of my findings. The idea came from a YouTube video where a simple sprite sheet came to life and started walking with a little bit of CSS animation code. I'm always eager to learn and this caught my attention. I found a sprite sheet of the pokemon Lugia (through spriters-resource.com) and I removed the background (see picture below). The sprite sheet is made up of 10 frames and how the animation works is we move the background-position by the full width of the sprite sheet. I measure the width of each individual sprite frame, multiply that by the sprite count and obtain the full width. The fly animation that you see includes the full width number. It was awesome to see Lugia fly on my screen!


![lugia-spirite-screenshot](https://github.com/user-attachments/assets/ce35b7e8-5e0b-4ca8-90d0-8d3e90cac469)

![sprite-css-code](https://github.com/user-attachments/assets/7cbf3286-3c28-49c1-856e-53f0d24da544)


<p align="right">(<a href="#readme-top">back to top</a>)</p>
