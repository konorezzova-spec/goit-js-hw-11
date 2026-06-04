import{i as l,S as h,a as y}from"./assets/vendor-DcHCnVjq.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(t){if(t.hits.length===0){l.error({position:"topRight",theme:"dark",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040"});return}const n=document.querySelector(".gallery"),o=t.hits.map(({largeImageURL:e,webformatURL:r,tags:a,likes:u,views:d,comments:f,downloads:m})=>`
        <li>
            <a href="${e}">
                <img src="${r}" alt="${a}" loading="lazy" />
            </a>
            <table class="info-table">
                <tr>
                    <th scope="col">Likes:</th>
                    <th scope="col">Views:</th>
                    <th scope="col">Comments:</th>
                    <th scope="col">Downloads:</th>
                </tr>
                <tr>
                    <td>${u}</td>
                    <td>${d}</td>
                    <td>${f}</td>
                    <td>${m}</td>
                </tr>
            </table>
        </li>
    `).join("");n.innerHTML=o,new h(".gallery a",{}).refresh()}function g(){const t=document.querySelector(".gallery");t.innerHTML=""}function b(){const t=document.querySelector(".loader");t.style.display="block"}function i(){const t=document.querySelector(".loader");t.style.display="none"}function L(t){return b(),y.get(`https://pixabay.com/api/?key=49108638-27579a6dba88847264bd73f39&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{p(o.data),i()}).catch(o=>{console.error(o),i()})}i();const c=document.querySelector(".form");c.addEventListener("submit",S);function S(t){t.preventDefault();const o=new FormData(c).get("search-text").trim();if(o===""){l.error({position:"topRight",theme:"dark",title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040"});return}g(),L(o)}
//# sourceMappingURL=index.js.map
