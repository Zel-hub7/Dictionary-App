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
        console.log(data[0].meanings[0].definitions[0].definition)
        result.innerHTML = `<div class="word">
        <h3>${data[0].word}</h3>
        <button>
         <i class="fas fa-volume-up"></i>
        </button>
    </div>
    <div class="details">
        <p>pos</p>
        <p>/Sample</p>
    </div>
    <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, necessitatibus.
    </p>`
    });
});
