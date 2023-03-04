import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener("click", onImageClick);

function createGalleryItemsMarkup(items) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__item" href="${original}" rel='noreferrer noopener nofollow'>
                    <img class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    />
                </a>
            </div> 
        `;
    })
    .join('');
};



function onImageClick(event) {
    event.preventDefault();

    if(!event.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}'>
    `);

    instance.show();

    window.addEventListener('keydown', onEscapePress);

    function onEscapePress(event) {
        if (event.code === 'Escape') {
        instance.close();
        }
    };
};
