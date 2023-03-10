//import basicLightbox from 'basiclightbox';
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
      alt="${image.description}"
    />
  </a>
</div>`).join(" ");

//console.log(galeryItems);
gallery.insertAdjacentHTML('beforeend', list);

gallery.addEventListener("click", handleImageClick);

function handleImageClick(e) {

e.preventDefault(e);

if (e.target.nodeName !== "IMG" ){
    return;
}
const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
instance.show();

gallery.addEventListener("keydown", (e) => {
    if(e.code==="Escape"){
        instance.close();
    }
  });
};



