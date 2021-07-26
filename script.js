const video = document.getElementById("video");
const videos = document.getElementById("video-s");
const display = document.querySelector(".time");
const topicDisplay = document.querySelector(".topic-name");
const links = document.querySelectorAll(".list-group-item");
const footer = document.querySelector(".footer");
let end;

footer.innerText += `${new Date().getFullYear()}`;
topicDisplay.innerText = `Topic: Java`;
const clear = function () {
  for (const item of links) {
    item.classList.remove("active");
    document
      .querySelector(`.${item.innerText === "C++" ? "Cpp" : item.innerText}`)
      .classList.add("d-none");
  }
};

for (const item of links) {
  item.addEventListener("click", () => {
    clear();
    display.style.color = "blue";
    topicDisplay.innerText = `Topic: ${item.innerText}`;
    //adding the video to the display
    video.children[0].src = `${
      item.innerText === "C++" ? "Cpp" : item.innerText
    }.mp4`;
    videos.children[0].src = `${
      item.innerText === "C++" ? "Cpp" : item.innerText
    }.mp4`;
    video.title = `${item.innerText}`;
    videos.title = `${item.innerText}`;
    video.load();
    videos.load();
    document
      .querySelector(`.${item.innerText === "C++" ? "Cpp" : item.innerText}`)
      .classList.remove("d-none");
    item.classList.add("active");
  });
}

video.addEventListener("loadedmetadata", () => {
  end = video.duration;
  display.innerText = `${end.toFixed(2)} left`;
});
videos.addEventListener("loadedmetadata", () => {
  end = videos.duration;
  display.innerText = `${end.toFixed(2)} left`;
});

video.addEventListener("click", () => {
  let i = setInterval(() => {
    if (end - video.currentTime < 6) {
      display.style.color = "red";
      let k = setInterval(() => {
        display.classList.toggle("d-none");
        if (display.innerText === `0.00 left`) {
          display.classList.remove("d-none");
          clearInterval(k);
        }
      }, 150);
    } else {
      display.style.color = "blue";
    }
    display.innerText = `${(end - video.currentTime).toFixed(2)} left`;
    if (end === video.currentTime) {
      clearInterval(i);
    }
  }, 150);
});
videos.addEventListener("click", () => {
  let i = setInterval(() => {
    if (end - videos.currentTime < 6) {
      display.style.color = "red";
      let k = setInterval(() => {
        display.classList.toggle("d-none");
        if (display.innerText === `0.00 left`) {
          display.classList.remove("d-none");
          clearInterval(k);
        }
      }, 150);
    } else {
      display.style.color = "blue";
    }

    display.innerText = `${(end - videos.currentTime).toFixed(2)} left`;
    if (end === videos.currentTime) {
      clearInterval(i);
    }
  }, 150);
});
