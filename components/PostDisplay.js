export default function createPostDisplay(root) {
    root.innerHTML = '';

    return ({ bulletins }) => {

        for (let bulletin of bulletins) {

            const div = document.createElement('div');
            div.classList.add('bulletin');

            const h3 = document.createElement('h3');
            h3.textContent = bulletin.title;
            //use spans for display text section instead of p tags
            const span1 = document.createElement('span');
            span1.textContent = bulletin.description;

            const span2 = document.createElement('span');
            span2.textContent = bulletin.contact;
            //add classlist to span 3 for smaller font in css 
            const span3 = document.createElement('span');
            span3.classList.add('tiny-text');
            const timeStamp = new Date(bulletin.created_at);
            span3.textContent = timeStamp;

            div.append(h3, span1, span2, span3);
            root.append(div);
        }
    };
}

