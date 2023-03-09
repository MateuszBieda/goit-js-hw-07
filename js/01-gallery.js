import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const list = galleryItems.map((image)=> 
`<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
    <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</div>`).join(" ");

//console.log(list);
gallery.insertAdjacentHTML('beforeend', list);
