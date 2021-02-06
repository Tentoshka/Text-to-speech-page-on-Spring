//function speak(text) {
//  const message = new SpeechSynthesisUtterance();
//  message.lang = "ru-RU";
//  message.text = text;
//  window.speechSynthesis.speak(message);
//}
//
//const txtMessage = document.querySelector("#text");
//
//document.addEventListener("DOMContentLoaded", speak(txtMessage.value));

function speak(text) {
  const message = new SpeechSynthesisUtterance();
  message.lang = "ru-RU";
  message.text = text;
  window.speechSynthesis.speak(message);
}

const btn = document.querySelector("#btn");
const txt = document.querySelector("#text");

btn.addEventListener("click", () => {
  speak(txt.value);
});
