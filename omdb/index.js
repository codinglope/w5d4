// document.getElementById("movie-input").oninput = () => {
document.getElementById("search-btn").onclick = () => {
  const query = document.getElementById("movie-input").value;
  const url = `http://www.omdbapi.com/?apikey=c5817894&t=${query}`;

  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  axios
    .get(url)
    .then(response => {
      const { Title, Plot, Actors } = response.data;
      if (!Title) return;

      document.getElementById("movie-title").innerText = Title;
      document.getElementById("movie-plot").innerText = Plot;
      document.getElementById("movie-cast").innerText = Actors;
    })
    .catch(err => {
      console.log(err);
    });
};
