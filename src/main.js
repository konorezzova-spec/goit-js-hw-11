import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, hideLoader } from "./js/render-functions";

hideLoader();

const searchForm = document.querySelector(".form");

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();
    const formData = new FormData(searchForm);
    const input = formData.get("search-text").trim();

    if (input === "") {
        iziToast.error({
            position: 'topRight',
            theme: 'dark',
            title: "Error",
            message: "Please enter a search query.",
            backgroundColor: '#EF4040',
        });
        return;
    }
    clearGallery();
    
    getImagesByQuery(input);
    
}