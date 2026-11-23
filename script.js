const themeToggle=document.getElementById("themeToggle");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
if(themeToggle){themeToggle.addEventListener("click",()=>{document.body.classList.toggle("dark-mode");themeToggle.textContent=document.body.classList.contains("dark-mode")?"☀️":"🌙";});}
if(menuToggle&&navLinks){menuToggle.addEventListener("click",()=>{navLinks.classList.toggle("active");menuToggle.textContent=navLinks.classList.contains("active")?"✕":"☰";});}
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>{if(navLinks)navLinks.classList.remove("active");if(menuToggle)menuToggle.textContent="☰";}));
const sections=document.querySelectorAll(".section");
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible");}),{threshold:.12});sections.forEach(section=>{section.classList.add("reveal");observer.observe(section);});}
const topButton=document.createElement("button");topButton.id="topButton";topButton.textContent="↑";topButton.setAttribute("aria-label","Retour en haut");document.body.appendChild(topButton);
topButton.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
window.addEventListener("scroll",()=>topButton.classList.toggle("show",window.scrollY>300));
