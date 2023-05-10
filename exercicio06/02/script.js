let clickCount = 0;

const button = document.getElementById("clickBtn");
button.addEventListener("click", function() {
  clickCount++;
  updateClickCount();
});

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", function() {
  clickCount = 0;
  updateClickCount();
});

function updateClickCount() {
  const countElement = document.getElementById("clickCount");
  countElement.innerText = clickCount.toString();
}
