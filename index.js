import{a as c,S as u}from"./assets/vendor-BDR0_ys0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="29142435-196ab0ea47673651fa34d9a29",m="https://pixabay.com/api/";function f(o){const r={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get(m,{params:r})}function y(o){return o.map(r=>g(r)).join("")}function g(o){const{webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:l}=o;return`        
        <li>
          <a href="${s}">
            <img src="${r}" alt="${i}" />
            <ul>
              <li>
                <p>Likes</p>
                <p>${e}</p>
              </li>
              <li>
                <p>Views</p>
                <p>${t}</p>
              </li>
              <li>
                <p>Comments</p>
                <p>${n}</p>
              </li>
              <li>
                <p>Downloads</p>
                <p>${l}</p>
              </li>
            </ul>
          </a>
        </li>`}const a={form:document.querySelector(".js-form"),galleryList:document.querySelector(".js-gallery")};a.form.addEventListener("submit",L);const d={captionSelector:"img",captionsData:"alt",captionDelay:250},h=new u(".gallery a",d);function L(o){o.preventDefault(),console.dir(o.target);const r=o.target.elements.query.value.trim();if(!r)return console.log("Your query is empty");console.log("🚀 ~ onSearchFormSubmit ~ query:",r),f(r).then(({data:i})=>{if(console.log(i),i.hits.length===0)throw console.log("Sorry, there are no images matching your search query. Please try again!"),new Error("Sorry, there are no images matching your search query. Please try again!");return i.hits}).then(i=>{a.galleryList.innerHTML=y(i),h.refresh()}).catch(console.log),o.target.reset(r)}
//# sourceMappingURL=index.js.map
