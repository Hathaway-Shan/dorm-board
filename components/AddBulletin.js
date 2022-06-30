export default function createAddBulletin(form, { handleAddBulletin }) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const title = formData.get('title');
        const description = formData.get('description');
        const contact = formData.get('contact');

        handleAddBulletin(title, description, contact);
    });
    return () => {

    };
}