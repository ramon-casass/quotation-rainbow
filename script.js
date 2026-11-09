function playAudio() {
  const audio = document.getElementById("ramonAudio");
  audio.currentTime = 0;
  audio.play();
}

function minimizeWindow() {
  const win = document.getElementById("mainWindow");
  win.classList.toggle("minimized");
}

function closeWindow() {
  const body = document.getElementById("windowBody");
  body.innerHTML = "<p style='padding: 2rem; text-align: center;'>Connection terminated.<br>Please restart AOL.</p>";
  setTimeout(() => {
    document.getElementById("mainWindow").style.display = "none";
  }, 800);
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Classic delayed popup
setTimeout(() => {
  document.getElementById("popup").style.display = "block";
}, 1800);