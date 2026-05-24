pokedex =   [
    {
        id: 1,
        name: "Bulbasaur",
        type: "Grass, Poison",
        description: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
        image: "../images/pokemons/0001.png"
    },
    {
        id: 2,
        name: "Ivysaur",
        type: "Grass, Poison",
        description: "The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.",
        image: "../images/pokemons/0002.png"
    },
    {
        id: 3,
        name: "Venusaur",
        type: "Grass, Poison",
        description: "While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.",
        image: "../images/pokemons/0003.png"
    },
    {
        id: 4,
        name: "Charmander",
        type: "Fire",
        description: "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.",
        image: "../images/pokemons/0004.png"
    }
]

const search = document.querySelector(".search-bar");

const main = document.querySelector(".main");
const divContainer = document.createElement("div");
divContainer.classList = "container";

let title = document.createElement("h2");


const pokemonFinder = (val) => {
    
    title.innerText = pokedex.find(pokemon => pokemon.id === val).name;
    
    return title.innerText
}

console.log(pokemonFinder(3));


search.addEventListener("send", pokemonFinder(search.innerHTML));

divContainer.appendChild(title);
main.appendChild(divContainer);