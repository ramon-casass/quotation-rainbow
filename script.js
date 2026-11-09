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

function randomPosition(el) {
  const maxX = window.innerWidth - el.offsetWidth - 16;
  const maxY = window.innerHeight - el.offsetHeight - 16;
  el.style.left = Math.max(8, Math.random() * maxX) + "px";
  el.style.top = Math.max(8, Math.random() * maxY) + "px";
}

function drift(el) {
  if (el.style.display === "none") return;
  let x = parseFloat(el.style.left) || 0;
  let y = parseFloat(el.style.top) || 0;
  x += (Math.random() - 0.5) * 50;
  y += (Math.random() - 0.5) * 50;
  x = Math.max(8, Math.min(x, window.innerWidth - el.offsetWidth - 8));
  y = Math.max(8, Math.min(y, window.innerHeight - el.offsetHeight - 8));
  el.style.left = x + "px";
  el.style.top = y + "px";
}

document.addEventListener("DOMContentLoaded", () => {
  const messagePopup = document.getElementById("messagePopup");
  const imagePopup = document.getElementById("imagePopup");

  imagePopup.addEventListener("click", closeImagePopup);

  // Message popup first
  setTimeout(() => {
    messagePopup.style.display = "block";
    randomPosition(messagePopup);
    setInterval(() => drift(messagePopup), 2500);
  }, 1000);

  // Image popup a little later
  setTimeout(() => {
    imagePopup.style.display = "block";
    randomPosition(imagePopup);
    setInterval(() => drift(imagePopup), 1800);
  }, 2200);
});