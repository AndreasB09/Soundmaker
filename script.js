// array with sound files and shortcuts

const soundFolder = "sounds";
const sounds = [
  {
    fileName: "Guitar_Chords1.wav",
    hotKey: "q",
  },
  {
    fileName: "Guitar_Harmonics1.wav",
    hotKey: "w",
  },
  {
    fileName: "Guitar_Harmonics2.wav",
    hotKey: "e",
  },
  {
    fileName: "Sunshine_Bass.wav",
    hotKey: "r",
  },
  {
    fileName: "Sunshine_Chords.wav",
    hotKey: "t",
  },
  {
    fileName: "Sunshine_Lead.wav",
    hotKey: "y",
  },
];

const magicSound = document.getElementById("magic-sound");

const btnContainer = document.createElement("div");
btnContainer.id = "btn-container";
magicSound.append(btnContainer);

// Create and append buttons for each sound
sounds.forEach((audioSrc) => {
  const buttonElem = createGuitar(audioSrc);
  btnContainer.append(buttonElem);
});

// buttonfunction
function createGuitar(audioSrc) {
  const buttonElem = document.createElement("button");
  buttonElem.textContent = audioSrc.fileName;

  const soundElem = document.createElement("audio");
  soundElem.src = `${soundFolder}/${audioSrc.fileName}`;

  audioSrc.buttonElem = buttonElem;
  audioSrc.soundElem = soundElem;

  // mousepress
  buttonElem.addEventListener("mousedown", () => {
    soundElem.play();
  });

  buttonElem.addEventListener("mouseup", () => {
    soundElem.pause();
    soundElem.currentTime = 0;
  });

  return buttonElem;
}

// hotkeys
window.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toLowerCase();

  const soundIsFound = sounds.find((sound) => sound.hotKey === keyPressed);
  if (!soundIsFound) return;

  soundIsFound.buttonElem.classList.add("btn-down");
  soundIsFound.soundElem.play();
});

window.addEventListener("keyup", (event) => {
  const keyPressed = event.key.toLowerCase();

  const soundIsFound = sounds.find((sound) => sound.hotKey === keyPressed);
  if (!soundIsFound) return;

  soundIsFound.buttonElem.classList.remove("btn-down");
  soundIsFound.soundElem.pause();
  soundIsFound.soundElem.currentTime = 0;
});