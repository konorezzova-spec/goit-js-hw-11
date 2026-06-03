
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

export function getImagesByQuery(query) { 
    const API_KEY = '49108638-27579a6dba88847264bd73f39';
    return axios.get(`https://pixabay.com/api/, {
        params: {
        key: ${API_KEY},
        q: ${query},
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
        }
    }`)
        .then(response => {createGallery(response.data)})
        .catch(error => console.error(error));
}