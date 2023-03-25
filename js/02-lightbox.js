import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};
// console.log(refs.gallery);

const onCreateImg = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `;
};

const onMarkupGallery = (galleryItems) =>
  galleryItems.map(onCreateImg).join("");

refs.gallery.innerHTML = onMarkupGallery(galleryItems);

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
});
