function test() {
    alert("Hello, world!");
}

function makeTextBigger() {
  const textArea = document.getElementById("textArea");
  textArea.style.fontSize = "24pt";
}

function toggleStyle() {
  const textArea = document.getElementById("textArea");
  const fancyShmancy = document.getElementById("fancyShmancy").checked;

  if (fancyShmancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function addMooEffect() {
  const textArea = document.getElementById("textArea");
  const sentences = textArea.value.split(".");
  for (let i = 0; i < sentences.length - 1; i++) {
    sentences[i] = sentences[i] + "-Moo";
  }
  textArea.value = sentences.join(". ").toUpperCase();
}

document.getElementById("biggerButton").onclick = makeTextBigger;
document.getElementById("fancyShmancy").onchange = toggleStyle;
document.getElementById("boringBetty").onchange = toggleStyle;
document.getElementById("mooButton").onclick = addMooEffect;
