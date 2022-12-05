//API Call
const API_URL = "https://v2.jokeapi.dev/joke/Any";
const result = document.getElementById("photo-area");
// Function to load joke
async function loadjoke() {
  try {
    const res = await fetch(API_URL);
    const jsonres = await res.json();
    console.log(jsonres);
    //Here the text will be appended
    result.innerHTML = "";
    if (jsonres.joke != undefined) {
      result.innerHTML += `<h3>${jsonres.joke}</h3>`;
    } else {
      console.log("2 jokes");
      result.innerHTML += `<h3>${jsonres.setup}</h3>
        <hr/>
        <h3>${jsonres.delivery}</h3>`;
    }
  } catch (err) {
    console.log(err);
  }
}
