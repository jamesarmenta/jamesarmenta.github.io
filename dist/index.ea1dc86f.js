!function(){const e=document.querySelector("main");for(let t=e.children.length;t>=0;t--)e.appendChild(e.children[Math.random()*t|0]);function t(e,t){return Math.round(Math.random()*(t-e)+e)}function n(e,t){t.parentNode.insertBefore(e,t.nextSibling)}document.querySelectorAll(".text").forEach((e=>{e.style.paddingLeft=`${t(0,33)}%`,e.style.paddingRight=`${t(0,33)}%`})),document.querySelectorAll(".grad").forEach((e=>{e.style.paddingRight=`${t(0,40)}%`,e.style.paddingLeft=`${t(0,40)}%`,e.style.marginBottom=`${t(12,36)}px`}));const a=document.querySelectorAll(".grad");a.forEach(((e,r)=>{0===r&&n((()=>{const e=document.createElement("div");return e.className="grad text",e.innerHTML="James&nbsp;Armenta is a software&nbsp;engineer and artist from San&nbsp;Diego,&nbsp;California",e})(),e),2===r&&n((()=>{const e=document.createElement("div");return e.className="grad text",e.innerHTML='<a href="mailto:armentajames@gmail.com">Contact me</a>',e})(),e),4===r&&n((()=>{const e=document.createElement("div");return e.className="grad text",e.innerHTML='<a href="https://www.instagram.com/jamesarmenta/">@jamesarmenta&#8599;</a>',e})(),e),r===a.length-1&&n((()=>{const e=document.createElement("div");e.className="grad text";const n=["Thanks for stopping by","Thank you thank you thank you","That's all, folks","See ya next time!","You made it to the bottom!"];return e.innerHTML=n[t(0,n.length-1)],e})(),e)}))}();