const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");

const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  console.log(inpWord);
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].word);
      console.log(data[0].meanings);
      result.innerHTML = `<div class="word">
        <h3 id = "wordd">${data[0].word}</h3>
        <button onclick="playSound()">
          <i class="fas fa-volume-up"></i>
        </button>
      </div>
      <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
      </div>
      <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
      </p>
      <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
      </p>`;

      if (data[0].phonetics && data[0].phonetics.length > 0) {
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        console.log(sound);
      } else {
        console.log("No pronunciation audio available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function playSound() {
  sound.play();
}
