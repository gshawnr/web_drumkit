for (let ele of document.querySelectorAll(".drum")) {
  ele.addEventListener("click", (ele) => {
    const validated = validateKey(ele.target.textContent);

    if (validated) {
      playAudio(validated.audioPath);
      showSelected(validated.key);
    }
  });
}

addEventListener("keydown", (e) => {
  const validated = validateKey(e.key);
  if (validated) {
    playAudio(validated.audioPath);
    showSelected(validated.key);
  }
});

function validateKey(key) {
  switch (key) {
    case "w":
      return {
        key,
        audioPath:
          "https://github.com/gshawnr/web_drumkit/blob/main/sounds/crash.mp3?raw=true",
      };
    case "a":
      return {
        key,
        audioPath:
          "https://github.com/gshawnr/web_drumkit/blob/main/sounds/kick-bass.mp3?raw=true",
      };
    case "s":
      return {
        key,
        audioPath:
          "https://github.com/gshawnr/web_drumkit/blob/main/sounds/snare.mp3?raw=true",
      };
    case "d":
      return {
        key,
        audioPath:
          "https://github.com/gshawnr/web_drumkit/blob/main/sounds/tom-1.mp3?raw=true",
      };
    case "j":
      return {
        key,
        audioPath:
          "https://github.com/gshawnr/web_drumkit/blob/main/sounds/tom-2.mp3?raw=true",
      };
    case "k":
      return {
        key,
        audioPath:
          "https://github.com/gshawnr/web_drumkit/blob/main/sounds/tom-3.mp3?raw=true",
      };
    case "l":
      return {
        key,
        audioPath:
          "https://github.com/gshawnr/web_drumkit/blob/main/sounds/tom-4.mp3?raw=true",
      };
    default:
      return;
  }
}

function playAudio(path) {
  const audio = new Audio(path);
  audio.play();
}

function showSelected(key) {
  const ele = document.querySelector(`.${key}`);
  ele.classList.toggle("pressed");
  setTimeout(() => {
    ele.classList.toggle("pressed");
  }, 300);
}
