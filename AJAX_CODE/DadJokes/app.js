const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

// const getDadJoke = async () => {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     return res.data.joke;
//   } catch (e) {
//     return "NO JOKES AVAILABLE! SORRY :(";
//   }
// };



const getDadJoke = async () => {
  try {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke
  }catch (err) {
  return "No Jokes Available. Sorry!"    
  }
}

button.addEventListener("click", addNewJoke);