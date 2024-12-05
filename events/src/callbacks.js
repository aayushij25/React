const heroes = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Doctor Strange"
]

function exclaim(str) {
  return str + '!';
}

// const exclaimedHeroes = heroes.map((hero) => exclaim(hero));
const exclaimedHeroes = heroes.map(exclaim);

console.log(exclaimedHeroes);