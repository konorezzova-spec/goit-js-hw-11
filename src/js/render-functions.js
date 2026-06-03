import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export function createGallery(images) { 
    if (images.hits.length === 0) {
        iziToast.error({
            title: "Error",
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
        return;
    }

}

export function clearGallery() { }

export function showLoader() { }

export function hideLoader() { }