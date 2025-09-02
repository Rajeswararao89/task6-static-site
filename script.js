// Small scroll effect for navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
