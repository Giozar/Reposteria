import { createCard } from "./src/js/catalog.js";

document.addEventListener('DOMContentLoaded',()=>{
    for (let i = 0; i < 7; i++) {
        createCard();
    }
})