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


// meme genearating API
const meme_btn = document.querySelector(".frame .meme");
const meme_img = document.querySelector(".frame .meme_image");

const updateDetails=(url,title,author)=>{
  meme_img.setAttribute("src",url);

}
meme_btn.addEventListener(
  "click",
  (generate = () => {
    fetch(" https://meme-api.com/gimme/programming_memes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url,data.title,data.author);
      });
  })
);
