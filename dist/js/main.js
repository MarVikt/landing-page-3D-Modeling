(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),n=()=>{const e=(new Date).getTime(),t=(new Date("28 april 2022").getTime()-e)/1e3;return{remainingTime:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}};let r=n(),l=setInterval((()=>{r.remainingTime>0?(t.textContent=r.hours<10?"0"+r.hours:r.hours,o.textContent=r.minutes<10?"0"+r.minutes:r.minutes,a.textContent=r.seconds<10?"0"+r.seconds:r.seconds):(t.textContent="00",o.textContent="00",a.textContent="00"),r=n(),r.remainingTime<0&&clearInterval(l)}),500)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body");t.addEventListener("click",(t=>{(t.target.closest(".menu")||t.target.classList.contains("close-btn")||t.target.matches(".active-menu a")||!t.target.closest("menu")&&e.classList.contains("active-menu"))&&e.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),o=t.querySelector(".popup-content");function a(){if(t.style.display="block",window.screen.availWidth>767){let e=0;o.style.opacity="0";let t=setInterval((()=>{e++,o.style.opacity=String(e/10),10==e&&clearInterval(t)}),30)}}e.forEach((e=>{e.addEventListener("click",a)})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.matches(".popup-close")||(t.style.display="none")}))})(),(()=>{const e=/[^\-\.\!\`\*\'\@\w]+/gi,t=document.getElementById("form1"),o=document.getElementById("form2"),a=document.getElementById("form3"),n=(t,o,a,n)=>{let r=!1;return/[^а-я\-\s]+/gi.test(t)||""===t.replace(/[\-\s]/g,"")?(alert("введите имя кириллицей, можно использовать дефис и пробел"),r=!0):alert("в форме имя введено верно"),e.test(o)?(alert("введите правильный email"),r=!0):alert("в форме email правильный"),/[^\d\(\)\-]+/gi.test(a)?(alert("введите телефон, используя цифры, круглые скобки и тире"),r=!0):alert("в форме телефон правильный"),""!==n&&(/[^а-я\-\s]+/gi.test(n)?(alert("введите сообщение кириллицей, можно использовать дефис и пробел"),r=!0):alert("в форме сообщение введено верно")),r};t.addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("form1-name"),o=document.getElementById("form1-email"),a=document.getElementById("form1-phone");n(t.value,o.value,a.value,"")})),o.addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("form2-name"),o=document.getElementById("form2-email"),a=document.getElementById("form2-phone"),r=document.getElementById("form2-message");n(t.value,o.value,a.value,r.value)})),a.addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("form3-name"),o=document.getElementById("form3-email"),a=document.getElementById("form3-phone");n(t.value,o.value,a.value,"")}))})(),(()=>{const e=document.querySelector(".calc-block"),t=e.querySelector("#total");let o=0,a=0,n=1,r=1,l=0;e.addEventListener("input",(e=>{e.target.matches("select")&&0!==e.target.selectedIndex?(o=+e.target.value,o=1===o?100:1.4===o?168:220):e.target.matches("input")&&(/[^0-9]+/gi.test(e.target.value)?e.target.value=e.target.value.replace(/[^0-9]+/gi,""):(e.target.classList.contains("calc-square")&&(a=+e.target.value>0?+e.target.value:0),e.target.classList.contains("calc-count")&&(n=+e.target.value>0?+e.target.value:1,n=n>1?1+.1*n:1),e.target.classList.contains("calc-day")&&(r=+e.target.value>0?+e.target.value:10,r=r>=10?1:r>=5?1.5:2))),l=Math.round(o*a*n*r),t.textContent=l}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=e.querySelectorAll(".portfolio-item");let o,a=e.querySelectorAll(".dot"),n=0;const r=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},c=()=>{r(t,n,"portfolio-item-active"),r(a,n,"dot-active"),n++,n>=t.length&&(n=0),l(t,n,"portfolio-item-active"),l(a,n,"dot-active")},s=()=>{o=setInterval(c,1500)};e.addEventListener("mouseenter",(e=>{e.target.matches(".portfolio-btn, .dot")&&clearInterval(o)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".portfolio-btn, .dot")&&s()}),!0),e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".portfolio-btn, .dot")&&(r(t,n,"portfolio-item-active"),r(a,n,"dot-active"),e.target.matches("#arrow-left")?(n--,n=n<0?t.length-1:n):e.target.matches("#arrow-right")?(n++,n=n>=t.length?0:n):e.target.matches(".dot")&&a.forEach(((t,o)=>{t===e.target&&(n=o)})),l(t,n,"portfolio-item-active"),l(a,n,"dot-active"))})),(()=>{const o=document.querySelector(".portfolio-dots");t.forEach(((e,t)=>{const a=document.createElement("li");a.classList.add("dot"),0===t&&a.classList.add("dot-active"),o.append(a)})),a=e.querySelectorAll(".dot")})(),s()})()})();