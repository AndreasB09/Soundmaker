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

function numberToWords(number) {
  const words = ["One", "Two", "Three", "Four", "Five", "Six"];
  return words[number - 1];
}

// Create and append buttons for each sound
sounds.forEach((audioSrc, index) => {
  const buttonElem = createGuitar(audioSrc, `Sound ${numberToWords(index + 1)}`);
  btnContainer.append(buttonElem);
});

// buttonfunction
function createGuitar(audioSrc, labelText) {
  const buttonElem = document.createElement("button");
  buttonElem.textContent = labelText;

  const soundElem = document.createElement("audio");
  soundElem.src = `${soundFolder}/${audioSrc.fileName}`;

  audioSrc.buttonElem = buttonElem;
  audioSrc.soundElem = soundElem;

  const hotkeyElem = document.createElement("div");
  const hotkeyText = `'${audioSrc.hotKey.toUpperCase()}'`;
  hotkeyElem.textContent = hotkeyText;

  // Append hotkey to the button
  buttonElem.appendChild(hotkeyElem);
  // mousepress
  buttonElem.addEventListener("mousedown", () => {
    soundElem.play();
    buttonElem.classList.add("btn-active");
  });

  buttonElem.addEventListener("mouseup", () => {
    soundElem.pause();
    soundElem.currentTime = 0;
    buttonElem.classList.remove("btn-active")
  });

  return buttonElem;
}

// hotkeys
window.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toLowerCase();

  const soundIsFound = sounds.find((sound) => sound.hotKey === keyPressed);
  if (!soundIsFound) return;

  soundIsFound.buttonElem.classList.add("btn-active");
  soundIsFound.soundElem.play();
});

window.addEventListener("keyup", (event) => {
  const keyPressed = event.key.toLowerCase();

  const soundIsFound = sounds.find((sound) => sound.hotKey === keyPressed);
  if (!soundIsFound) return;

  soundIsFound.buttonElem.classList.remove("btn-active");
  soundIsFound.soundElem.pause();
  soundIsFound.soundElem.currentTime = 0;
});