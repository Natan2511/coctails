var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequiref932;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequiref932=r);var a=r("cyIMT"),l=r("6tYD7"),n=r("lJXXB"),i=r("bvzT9"),c=r("3drWc");document.querySelector(".coctail-info-modal ");const s=document.querySelector(".coctails__list"),d=(document.querySelector(".button-more"),document.querySelector(".coctails-sorry"));let u=[];const f=()=>{const e=localStorage.getItem("Favorit Coctails");return JSON.parse(e)};async function g(){s.innerHTML="";const e=f().map((e=>a.default.fetchCocktailDetailsById(e))),t=(await Promise.all(e)).map((({drinks:e})=>e)).flat(1);s?.insertAdjacentHTML("afterbegin",l.default.createMarkup(t))}f()&&(u=[...f()],g(f())),f()&&0!==f().length||d.insertAdjacentHTML("afterbegin",'<p class="sorry__title-coctails ">You haven\'t added any favorite cocktails yet</p>');s?.addEventListener("click",(e=>{if("BUTTON"===e.target.nodeName&&("button-more"===e.target.className&&(0,n.onGalleryClick)(e),"button-add"===e.target.className)){localStorage.getItem(i.keys.localCoctailsKey).includes(Number(e.target.id))?(u.splice(u.indexOf(Number(e.target.id)),1),localStorage.setItem("Favorit Coctails",JSON.stringify(u)),console.log(e.target.id),g()):((0,c.getSetLS)(Number(e.target.id)),g())}}));
//# sourceMappingURL=favorite-cocktails.e62c993d.js.map
