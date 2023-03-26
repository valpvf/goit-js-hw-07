import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

const onMarkupGallery = (galleryItems) =>
  galleryItems.map(onCreateImg).join("");

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

refs.gallery.insertAdjacentHTML(
  "afterbegin",
  onMarkupGallery(galleryItems)
);

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  basicLightbox
    .create(
      `<img class="gallery__image"
        src="${e.target.dataset.source}"
        alt="${e.target.getAttribute("alt")}"/>`
    )
    .show();
  document.addEventListener("keydown", onModalEscClose);
}

function onModalEscClose(e) {
  if (e.code === "Escape") {
    console.log(document.querySelector(".basicLightbox").remove());
    document.removeEventListener("keydown", onModalEscClose);
  }
}
