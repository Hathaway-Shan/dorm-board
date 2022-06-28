// import services and utilities
import state from './state.js';

import { getPosts, getUser, signIn, signUp } from './services/Services.js';
import createPostDisplay from './components/PostDisplay.js';
import createAuthError from './components/AuthError.js';
import AuthError from './components/AuthForm.js';

// import component creators

// declare state variables
let errorMessage = '';

// write handler functions

//displays post strings from database
async function handlePageLoad() {
    state.bulletin = await getPosts();
    display();
}

async function handleSignIn(email, password) {
    console.log(email, password);
    const response = await signIn(email, password);
    checkAuth(response);
}

async function handleSignUp(email, password) {
    console.log(email, password);
    const response = await signUp(email, password);
    checkAuth(response);
}

function checkAuth(response) {
    if (response?.error) {
        //eslint-disable-next-line no-console
        console.log(response.error);
        errorMessage = response.error.message;
        display();
    }
    else {
        location.replace('./services');
    }
}

// Create each component: 
// - pass in the root element via querySelector
const PostDisplay = createPostDisplay(document.querySelector('#bulletin-board'));
const
// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    PostDisplay({ bulletin: state.bulletin });

}

// Call display on page load
handlePageLoad();
