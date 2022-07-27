import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryContainer.addEventListener('click', onGalleryContainerClick,);

function createGallery() {
  return galleryItems.map(({ original, preview, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`
  }).join('');
};
function onGalleryContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  gallery.open(event);
 
};
let gallery = new SimpleLightbox('.gallery a',{
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 250,
} );
gallery.on('show.simplelightbox');

