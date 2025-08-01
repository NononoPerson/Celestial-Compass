document.getElementById("sendBtn").addEventListener("click", handleUserInput);
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") handleUserInput();
});

function handleUserInput() {
  const input = document.getElementById("userInput").value.trim();
  if (!input) return;

  displayMessage("You: " + input);
  const response = getBotResponse(input.toLowerCase());
  displayMessage("ZodiacVerseGPT: " + response);

  document.getElementById("userInput").value = "";
}

function getBotResponse(question) {
  for (let key in zodiacBotQA) {
    if (question.includes(key.toLowerCase())) {
      return zodiacBotQA[key];
    }
  }
  return "Sorry, I don't know that. Try asking something else about zodiac signs!";
}

function displayMessage(msg) {
  const chat = document.getElementById("chatContainer");
  const div = document.createElement("div");
  div.className = "msg";
  div.innerText = msg;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
