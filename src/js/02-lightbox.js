import { galleryItems } from "./gallery-items.js";
const galleryEl = document.querySelector(".gallery");

function newGallary(image) {
  return image
    .map(({ original, preview, description }) => {
      return `<a class="gallery__link" href="${original}">
         <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
         />
        </a>`;
    })
    .join("");
}
galleryEl.insertAdjacentHTML("beforeend", newGallary(galleryItems));

galleryEl.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
  });
  galleryEl.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
