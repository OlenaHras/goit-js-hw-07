import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGallery() {
  return galleryItems.map(({ original, preview, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  }).join('');
};

let modalWindow;

function onGalleryContainerClick(event) {
  event.preventDefault();
  const selectedImg = event.target.dataset.source;

  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  modalWindow = basicLightbox.create(`
	<img src="${selectedImg}"/>
  `);
  modalWindow.show();
  window.addEventListener('keydown', onCloseImage);
};
 
function onCloseImage(event) {
  if (event.key === 'Escape') {
    modalWindow.close();
    window.removeEventListener('keydown', onCloseImage);
  };
};

