(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();async function f(e){const t=await fetch(`https://restcountries.com/v3.1/name/${e}`);if(!t.ok)throw new Error("Country not found");return(await t.json())[0]}const l="YOUR_OPENTRIP_API_KEY";async function g(e,t){const a=await(await fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=30000&limit=3&lat=${e}&lon=${t}&apikey=${l}`)).json();return a.features?a.features:[]}async function h(e){return await(await fetch(`https://api.opentripmap.com/0.1/en/places/xid/${e}?apikey=${l}`)).json()}const y="YOUR_UNSPLASH_KEY";async function $(e){const o=await(await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(e)}&client_id=${y}`)).json();return o.results&&o.results.length>0?o.results[0].urls.small:"https://via.placeholder.com/300"}function v(e){return`
    <h2>${e.name.common}</h2>
    <img src="${e.flags.svg}" alt="Flag of ${e.name.common}" />
    <p>Capital: ${e.capital}</p>
    <p>Population: ${e.population.toLocaleString()}</p>
    <p>Region: ${e.region}</p>
    <p>Languages: ${Object.values(e.languages).join(", ")}</p>
    <p>Currency: ${Object.values(e.currencies)[0].name}</p>
    <h3>Top Attractions</h3>
  `}function L(e,t,o){return`
    <div class="card">
      <h4>📍 ${e}</h4>
      <img src="${t}" />
      <p>${o}</p>
    </div>
  `}function I(e,t){localStorage.setItem(e,JSON.stringify(t))}function w(e){return JSON.parse(localStorage.getItem(e))||[]}async function E(e){var n;const t=document.getElementById("result"),o=document.getElementById("error"),a=document.getElementById("recentSearches");o.classList.add("hidden"),t.innerHTML="";try{const r=await f(e);t.innerHTML+=v(r);let s=w("recent");s.includes(e)||s.unshift(e),s=s.slice(0,5),I("recent",s),a.innerHTML=`<h4>Recent Searches:</h4> ${s.map(i=>`<span>${i}</span>`).join(", ")}`;const[u,d]=r.latlng,p=await g(u,d);for(const i of p){const c=await h(i.properties.xid),m=((n=c.preview)==null?void 0:n.source)||await $(c.name);t.innerHTML+=L(c.name,m,c.kinds)}}catch(r){o.textContent=r.message,o.classList.remove("hidden")}}const O=document.getElementById("searchBtn");O.addEventListener("click",()=>{const e=document.getElementById("searchInput").value.trim();e&&E(e)});const P=document.getElementById("themeToggle");P.addEventListener("click",()=>{document.body.classList.toggle("dark-mode")});
