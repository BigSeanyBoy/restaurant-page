(()=>{"use strict";const e=function(){const e=document.createElement("div");e.classList.add("tab-background");const t=document.createElement("h2");t.classList.add("contact"),t.textContent="Contact",e.appendChild(t);const n=document.createElement("div");n.classList.add("message"),n.textContent="Message",e.appendChild(n);const d=document.createElement("div");d.classList.add("courier"),d.textContent="Guild Courier",e.appendChild(d);const c=document.createElement("div");c.classList.add("location"),c.textContent="Location",e.appendChild(c);const a=document.createElement("div");a.classList.add("sietch"),a.textContent="Sietch Tabr",e.appendChild(a);const o=document.createElement("img");return o.classList.add("map"),o.setAttribute("src","images/dune_map.png"),e.appendChild(o),e},t=function(){const e=document.createElement("div");e.classList.add("tab-background");const t=document.createElement("h2");t.classList.add("about"),t.textContent="About",e.appendChild(t);const n=document.createElement("div");n.classList.add("copy"),n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit explicabo doloremque illum porro nesciunt, unde similique ratione ut dicta dignissimos quia expedita, repudiandae rerum. Cumque commodi illo dolorum impedit!",e.appendChild(n);const d=document.createElement("img");return d.classList.add("logo"),d.setAttribute("src","images/sand.png"),e.appendChild(d),e},n=function(){const e=document.createElement("div");e.classList.add("tab-background");const t=document.createElement("h2");t.classList.add("menu"),t.textContent="Menu",e.appendChild(t);const n=document.createElement("div");n.classList.add("card-container");const d=[["Grilled Muad-dib","images/meat.png"],["Mish Mish","images/apricot.png"],["Melange Coffee","images/coffee-cup.png"],["Tabara","images/cinnamon-roll.png"]];for(const e of d){const t=document.createElement("div");t.classList.add("card");const d=document.createElement("img");d.classList.add("menu-image"),d.setAttribute("src",e[1]),t.appendChild(d);const c=document.createElement("div");c.classList.add("menu-item"),c.textContent=e[0],t.appendChild(c),n.appendChild(t)}return e.appendChild(n),e};!function(){const d=document.getElementById("content");d.appendChild(function(){const e=document.createElement("h1");return e.classList.add("headline"),e.textContent="DUNE SALOON",e}()),d.appendChild(function(){const d=document.createElement("nav");d.classList.add("nav");const c={home:t(),menu:n(),contact:e()};for(let e in c){const t=document.createElement("div");t.classList.add("nav-button"),t.setAttribute("id",`${e}`),t.textContent=e,t.addEventListener("click",(()=>{const t=document.getElementById("content");t.removeChild(document.querySelector(".tab-background")),t.insertBefore(c[e],document.querySelector(".footer"))})),d.appendChild(t)}return d}()),d.appendChild(t()),d.appendChild(function(){const e=document.createElement("footer");return e.classList.add("footer"),e.textContent="Made by Sean Hammell",e}())}()})();