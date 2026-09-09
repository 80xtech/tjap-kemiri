const skipButton = document.querySelector("#skip-button");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function openLogin() {
  window.location.replace("/login");
}

skipButton.addEventListener("click", openLogin);
window.setTimeout(openLogin, reduceMotion ? 350 : 3100);
