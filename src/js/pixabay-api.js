import axios from "axios";
import { createGallery, hideLoader, showLoader } from "./render-functions";

export function getImagesByQuery(query) { 
    showLoader();
    const API_KEY = '49108638-27579a6dba88847264bd73f39';
    return axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            createGallery(response.data); 
            hideLoader();
        })
        .catch(error => {
            console.error(error);
            hideLoader();
        });
}