TOC:
- poke.js
- poke-home.html
- poke-search.html
- poke-details.html
- home/search.css

The poke.js file is started by fetching the data from the Poke API. The async function takes in an id as the input. With that id, it fetches the pokemon's data. I want to know if the
data retrieval was successful so I include a (!response.ok) inside an if statement. If data retrieval is not successful, an error message is printed out. An event listener is added
and attached to a 'DOMContentLoaded' event. Another event listener is attached to the element with id 'searchButton' that executes when clicked. The code is set up to validate the 
input and attach it to the URL. The next two lines declare variables that will parse the URL to search for the id string. Then, we have the code to display all the information fetched
from the API. We grab the name, image, and the stats to display on the page.

The poke-home.html file is a simple hero image of the original 151 pokemon with a jumbotron container. The container includes text and a search button that takes the user to the
poke-search.html page.

The poke-search.html file is also a simple page that includes an input field with a search button. The detail of this page is a flying lugia that was made by animating a sprite sheet.
The sheet consists of 10 frames and they are scaled and animated to present one frame at a time. The animation is set to infinite so it never ends.

The poke-details.html file is the page where the fetched data for the pokemon is displayed. The image is empty because the js code fetches the image from the API and inserts it into
the src attribute of the image element. A lot of the other HTML code is inserted using .innerHTML and .textContent.

For the CSS code, using Bootstrap allows for efficient styling and that's exactly what this webpage does. The only core CSS code that was written was the animation. 
