let count = 0;
let progress = document.querySelector(".progress-bar");
let percent = document.querySelector("#percent");
let downloadStatus = document.querySelector("#status");

let interval = setInterval(function () {
  if (count <= 99) {
    count++;
    progress.style.width = count + "%";
    percent.textContent = count + "%";
  } else {
    downloadStatus.textContent = "Downloaded";
    downloadStatus.style.color = "#FFF58A";

    clearInterval(interval);
  }
}, 40);
