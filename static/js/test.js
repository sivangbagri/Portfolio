

function saveText() {
  var textInput = document.getElementById("textInput").value;
  var storedText = localStorage.getItem("storedText");
  if (textInput != "" && storedText) {
    storedText += "<br>" + textInput;
  } else {
    storedText += textInput;
    alert("Don't be lazy ! Add a comment");
  }
  localStorage.setItem("storedText", storedText);
  document.getElementById("textInput").value = "";
  showStoredText();
}

// to display the stored text on the HTML page
function showStoredText() {
  var storedText = localStorage.getItem("storedText");

  document.getElementById("storedText").innerHTML = `<div>${storedText}</div>`;
}

// Load the stored text when the page loads
window.onload = showStoredText;


