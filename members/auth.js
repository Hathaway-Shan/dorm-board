import { signIn, signUp } from '../services/Services.js';
import createAuthForm from '../components/AuthForm.js';
import state from '../state.js';

async function handlePageLoad() {

    display();
}

async function handleSignIn(email, password) {
    console.log(email, password);
    const response = await signIn(email, password);
    console.log(response);
    return checkAuth(response);

}

async function handleSignUp(email, password) {
    console.log(email, password);
    const response = await signUp(email, password);
    console.log(response);
    checkAuth(response);
}

async function checkAuth(response) {

    if (response.error) {
        state.errorMessage = response.error.message;
        display();
    }
    else {
        location.replace('../CreateBulletin');
    }
}

const SignInForm = createAuthForm(document.querySelector('#sign-in'), { handleAuth: handleSignIn });
const SignUpForm = createAuthForm(document.querySelector('#sign-up'), { handleAuth: handleSignUp });

function display() {
    SignInForm();
    SignUpForm();
}

handlePageLoad();