const state = [];
state.posts = [];
state.errorMessage = '';
state.user = null;

function initialize() {
    state.posts = [];
    state.errorMessage = '';
    state.user = null;
}

initialize();

export default state;