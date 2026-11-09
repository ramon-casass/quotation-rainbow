function playAudio() {
  const audio = document.getElementById("ramonAudio");
  audio.currentTime = 0;
  audio.play();
}

function closeMessagePopup() {
  document.getElementById("messagePopup").style.display = "none";
}

function placeOnScreen(el) {
  el.style.display = "block";
  const w = el.offsetWidth;
  const h = el.offsetHeight;
  const maxX = Math.max(8, window.innerWidth - w - 10);
  const maxY = Math.max(8, window.innerHeight - h - 10);
  el.style.left = (8 + Math.random() * (maxX - 8)) + "px";
  el.style.top = (8 + Math.random() * (maxY - 8)) + "px";
}

function drift(el) {
  if (el.style.display === "none") return;
  const w = el.offsetWidth;
  const h = el.offsetHeight;
  let x = parseFloat(el.style.left) || 0;
  let y = parseFloat(el.style.top) || 0;
  x += (Math.random() - 0.5) * 32;
  y += (Math.random() - 0.5) * 32;
  x = Math.max(6, Math.min(x, window.innerWidth - w - 6));
  y = Math.max(6, Math.min(y, window.innerHeight - h - 6));
  el.style.left = x + "px";
  el.style.top = y + "px";
}

document.addEventListener("DOMContentLoaded", () => {
  const imagePopup = document.getElementById("imagePopup");
  imagePopup.addEventListener("click", () => imagePopup.style.display = "none");

  setTimeout(() => {
    const msg = document.getElementById("messagePopup");
    placeOnScreen(msg);
    setInterval(() => drift(msg), 2600);
  }, 1000);

  setTimeout(() => {
    placeOnScreen(imagePopup);
    setInterval(() => drift(imagePopup), 1900);
  }, 3200);
});