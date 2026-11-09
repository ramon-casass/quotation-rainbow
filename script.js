function playAudio() {
  const audio = document.getElementById("ramonAudio");
  audio.currentTime = 0;
  audio.play();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function randomPosition(el) {
  const maxX = window.innerWidth - el.offsetWidth - 16;
  const maxY = window.innerHeight - el.offsetHeight - 16;
  el.style.left = Math.max(8, Math.random() * maxX) + "px";
  el.style.top = Math.max(8, Math.random() * maxY) + "px";
}

function driftPopup() {
  const popup = document.getElementById("popup");
  if (popup.style.display === "none") return;

  let x = parseFloat(popup.style.left) || 0;
  let y = parseFloat(popup.style.top) || 0;
  x += (Math.random() - 0.5) * 50;
  y += (Math.random() - 0.5) * 50;

  x = Math.max(8, Math.min(x, window.innerWidth - popup.offsetWidth - 8));
  y = Math.max(8, Math.min(y, window.innerHeight - popup.offsetHeight - 8));

  popup.style.left = x + "px";
  popup.style.top = y + "px";
}

setTimeout(() => {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
  randomPosition(popup);
  setInterval(driftPopup, 2200);
}, 1400);