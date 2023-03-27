import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.insertAdjacentHTML(
  "beforeend",
  onMarkupGallery(galleryItems)
);

function onCreateImg({ preview, original, description }) {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `;
}

function onMarkupGallery(galleryItems) {
  return galleryItems.map(onCreateImg).join("");
  
}

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
});
