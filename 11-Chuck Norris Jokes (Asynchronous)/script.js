const btn = document.getElementById("loadJokeBtn");

btn.addEventListener("click", () => {
  const fun = async () => {
    try {
      const joke = await fetch("https://api.chucknorris.io/jokes/random");
      console.log("Button clicked");
      const jokeData = await joke.json();
      document.getElementById("loadJokeBtn2").innerText = jokeData.value;
    } catch (error) {
      console.log(error);
    }
  };
  fun();
});
