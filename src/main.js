import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import axios from "axios";
import { getImagesByQuery } from "./js/pixabay-api";
// import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const searchForm = document.querySelector(".form");

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();
    const formData = new FormData(searchForm);
    const input = formData.get("search-text").trim();

    if (input === "") {
        iziToast.error({
            title: "Error",
            message: "Please enter a search query.",
        });
        return;
    }

    getImagesByQuery(input);

}