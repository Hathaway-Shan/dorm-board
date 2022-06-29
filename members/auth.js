import { signIn, signUp } from '../services/Services.js';
import createAuthForm from '../components/AuthForm.js';

async function handleSignIn(email, password) {
    const response = await signIn(email, password);
    checkAuth(response);
}

async function handleSignUp(email, password) {
    const response = await signUp(email, password);
    checkAuth(response);
}

async function checkAuth(response) {
    if (response.error) {
        return;
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

display();