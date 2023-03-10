import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const list = galleryItems.map((image)=> 
`<a class="gallery__item" href=${image.original}>
    <img
      class="gallery__image"
      src=${image.preview}
      alt="${image.description}"
    />
  </a>
</div>`).join(" ");

//console.log(galeryItems);
gallery.insertAdjacentHTML('beforeend', list);

let galleryList=  new SimpleLightbox('.gallery a',{captions: true, captionDelay:250, captionPosition:'bottom',captionType:'attr', captionsData:'alt',captionSelector:'img' } );
galleryList.next();
