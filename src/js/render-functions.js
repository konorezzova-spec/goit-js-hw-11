import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
    
export function createGallery(images) { 
    if (images.hits.length === 0) {
        iziToast.error({
            position: 'topRight',
            theme: 'dark',
            title: "Error",
            message: "Sorry, there are no images matching your search query. Please try again!",
            backgroundColor: '#EF4040',
        });
        return;
    }
    const gallery = document.querySelector(".gallery");
    const markup = images.hits.map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `
        <li>
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <table class="info-table">
                <tr>
                    <th scope="col">Likes:</th>
                    <th scope="col">Views:</th>
                    <th scope="col">Comments:</th>
                    <th scope="col">Downloads:</th>
                </tr>
                <tr>
                    <td>${likes}</td>
                    <td>${views}</td>
                    <td>${comments}</td>
                    <td>${downloads}</td>
                </tr>
            </table>
        </li>
    `).join("");
    gallery.innerHTML = markup;

    const simpleGallery = new SimpleLightbox(".gallery a", {
        // captionType: "attr",
        // captionsData: "alt",
        // captionDelay: 250,
    });
    simpleGallery.refresh();
}

export function clearGallery() { 
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
}

export function showLoader() { 
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
}

export function hideLoader() { 
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}