for (let ele of document.querySelectorAll(".drum")) {
  ele.addEventListener("click", (ele) => {
    const validated = validateKey(ele.target.textContent);

    if (validated) {
      playAudio(validated.audioPath);
      changeText(validated.key);
    }
  });
}

addEventListener("keydown", (e) => {
  const validated = validateKey(e.key);
  if (validated) {
    playAudio(validated.audioPath);
    changeText(validated.key);
  }
});

function validateKey(key) {
  switch (key) {
    case "w":
      return { key, audioPath: "../sounds/crash.mp3" };
    case "a":
      return { key, audioPath: "../sounds/kick-bass.mp3" };
    case "s":
      return { key, audioPath: "../sounds/snare.mp3" };
    case "d":
      return { key, audioPath: "../sounds/tom-1.mp3" };
    case "j":
      return { key, audioPath: "../sounds/tom-2.mp3" };
    case "k":
      return { key, audioPath: "../sounds/tom-3.mp3" };
    case "l":
      return { key, audioPath: "../sounds/tom-4.mp3" };
    default:
      return;
  }
}

function playAudio(path) {
  const audio = new Audio(path);
  audio.play();
}

function changeText(key) {
  const ele = document.querySelector(`.${key}`);
  if (ele) {
    ele.classList.toggle("pressed");
    setTimeout(() => {
      ele.classList.toggle("pressed");
    }, 300);
  }
}
