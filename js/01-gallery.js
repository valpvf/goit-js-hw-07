import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

const onCreateImg = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
    `;
};

const onMarkupGallery = (galleryItems) =>
  galleryItems.map(onCreateImg).join("");

refs.gallery.innerHTML = onMarkupGallery(galleryItems);

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  basicLightbox
    .create(
      `<img class="gallery__image"
            src="${e.target.dataset.source}"
            alt="${e.target.getAttribute("alt")}"/>`
    )
    .show();
  // document.addEventListener("keydown", onModalEscClose);
}

// function onModalEscClose(e) {
//   if (e.code === "Escape") {
//     instance.close();
// refs.gallery.removeEventListener("click", onGalleryClick);
//   }
// }
