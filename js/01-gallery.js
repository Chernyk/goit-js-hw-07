import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

function createGallaryMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
                 <a class="gallery__link" href="${original}">
                  <img 
                   class="gallery__image"
                   src="${preview}" 
                   data-source="${original}" 
                   alt="${description}"
                  />
                 </a>
               </div>`
    )
    .join("");
}
const addGallaryMarcup = createGallaryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", addGallaryMarcup);
gallery.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);
  instance.show();
  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
