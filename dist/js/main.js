(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),s=()=>{const e=(new Date).getTime(),t=(new Date("28 april 2022").getTime()-e)/1e3;return{remainingTime:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}};let c=s(),r=setInterval((()=>{c.remainingTime>0?(t.textContent=c.hours<10?"0"+c.hours:c.hours,n.textContent=c.minutes<10?"0"+c.minutes:c.minutes,o.textContent=c.seconds<10?"0"+c.seconds:c.seconds):(t.textContent="00",n.textContent="00",o.textContent="00"),c=s(),c.remainingTime<0&&clearInterval(r)}),500)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector(".menu"),n=(document.querySelector("body"),()=>{e.classList.toggle("active-menu")});e.addEventListener("click",(e=>{(e.target.classList.contains("close-btn")||"A"===e.target.tagName)&&n()})),t.addEventListener("click",n)})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-content");function o(){if(t.style.display="block",window.screen.availWidth>767){let e=0;n.style.opacity="0";let t=setInterval((()=>{e++,n.style.opacity=String(e/10),10==e&&clearInterval(t)}),30)}}e.forEach((e=>{e.addEventListener("click",o)})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.matches(".popup-close")||(t.style.display="none")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();