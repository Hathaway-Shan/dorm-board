const state = [];
state.bulletin = [];
state.errorMessage = '';
state.user = null;

function initialize() {
    state.bulletins = [];
    state.errorMessage = '';
    state.user = null;
}

initialize();

export default state;