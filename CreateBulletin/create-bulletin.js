import { protectUser } from '../utils.js';
import createAddBulletin from '../components/AddBulletin.js';
import { addBulletinItem } from '../services/Services.js';


async function handlePageLoad() {
    await protectUser();
    display();
}

async function handleAddBulletin(title, description, contact) {
    await addBulletinItem(title, description, contact);

    location.replace('../' + window.location.search);

}

const addBulletin = createAddBulletin(document.querySelector('#post-it-form'), { handleAddBulletin });


//display function
function display() {
    addBulletin();
}
//update page display
handlePageLoad();