// import services and utilities
import state from './state.js';

import { getPosts } from './services/GetPost.js';
import createPostDisplay from './components/PostDisplay.js';

// import component creators

// declare state variables


// write handler functions

async function handlePageLoad() {
    state.bulletin = await getPosts();
    console.log(state.bulletin);
    display();
}

// Create each component: 
// - pass in the root element via querySelector
const PostDisplay = createPostDisplay(document.querySelector('#bulletin-board'));
// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    PostDisplay({ bulletin: state.bulletin });

}

// Call display on page load
handlePageLoad();
