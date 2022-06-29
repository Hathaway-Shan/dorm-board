import { getUser } from './services/Services.js';

export async function protectUser() {
    const user = await getUser;
    if (!user) {
        location.replace('../members/' + window.location.search);
    }
}