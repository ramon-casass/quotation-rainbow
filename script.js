function playAudio() {
  const audio = document.getElementById("ramonAudio");
  audio.currentTime = 0;
  audio.play();
}

function closeMessagePopup() {
  document.getElementById("messagePopup").style.display = "none";
}

function closeImagePopup() {
  document.getElementById("imagePopup").style.display = "none";
}

function placeOnScreen(el) {
  // Force a reflow so we get accurate size
  el.style.display = "block";
  el.style.visibility = "hidden";

  const w = el.offsetWidth;
  const h = el.offsetHeight;
  const maxX = Math.max(8, window.innerWidth - w - 12);
  const maxY = Math.max(8, window.innerHeight - h - 12);

  el.style.left = (8 + Math.random() * (maxX - 8)) + "px";
  el.style.top = (8 + Math.random() * (maxY - 8)) + "px";
  el.style.visibility = "visible";
}

function drift(el) {
  if (el.style.display === "none") return;

  const w = el.offsetWidth;
  const h = el.offsetHeight;
  let x = parseFloat(el.style.left) || 0;
  let y = parseFloat(el.style.top) || 0;

  x += (Math.random() - 0.5) * 40;
  y += (Math.random() - 0.5) * 40;

  x = Math.max(6, Math.min(x, window.innerWidth - w - 6));
  y = Math.max(6, Math.min(y, window.innerHeight - h - 6));

  el.style.left = x + "px";
  el.style.top = y + "px";
}

document.addEventListener("DOMContentLoaded", () => {
  const messagePopup = document.getElementById("messagePopup");
  const imagePopup = document.getElementById("imagePopup");

  imagePopup.addEventListener("click", closeImagePopup);

  // Message first
  setTimeout(() => {
    placeOnScreen(messagePopup);
    setInterval(() => drift(messagePopup), 2800);
  }, 900);

  // Image later so they don’t stack
  setTimeout(() => {
    placeOnScreen(imagePopup);
    setInterval(() => drift(imagePopup), 2000);
  }, 3200);
});