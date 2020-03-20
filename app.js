const api = {
  key: "0267d2e558931f4fc2e5b8964655cd54",
  base: "https://api.openweathermap.org/data/2.5/"
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    // getResults(searchbox.value);
    console.log(searchbox.value);
  }
}
