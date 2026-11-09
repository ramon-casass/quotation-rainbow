function playAudio() {
  const a = document.getElementById("ramonAudio");
  a.currentTime = 0;
  a.play();
}

function closeMessagePopup() {
  document.getElementById("messagePopup").style.display = "none";
}

function place(el) {
  el.style.display = "block";
  const w = el.offsetWidth, h = el.offsetHeight;
  const maxX = Math.max(8, window.innerWidth - w - 8);
  const maxY = Math.max(8, window.innerHeight - h - 8);
  el.style.left = (8 + Math.random() * (maxX - 8)) + "px";
  el.style.top = (8 + Math.random() * (maxY - 8)) + "px";
}

function drift(el) {
  if (el.style.display === "none") return;
  const w = el.offsetWidth, h = el.offsetHeight;
  let x = parseFloat(el.style.left) || 0;
  let y = parseFloat(el.style.top) || 0;
  x += (Math.random() - 0.5) * 30;
  y += (Math.random() - 0.5) * 30;
  x = Math.max(6, Math.min(x, window.innerWidth - w - 6));
  y = Math.max(6, Math.min(y, window.innerHeight - h - 6));
  el.style.left = x + "px";
  el.style.top = y + "px";
}

document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("imagePopup");
  img.addEventListener("click", () => img.style.display = "none");

  setTimeout(() => {
    const msg = document.getElementById("messagePopup");
    place(msg);
    setInterval(() => drift(msg), 2500);
  }, 900);

  setTimeout(() => {
    place(img);
    setInterval(() => drift(img), 1800);
  }, 3000);
});