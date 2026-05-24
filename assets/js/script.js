pokedex =   [
    {
        id: 1,
        name: "Bulbasaur",
        type: "Grass, Poison",
        description: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
        image: "assets/images/pokemons/0001.png"
    },
    {
        id: 2,
        name: "Ivysaur",
        type: "Grass, Poison",
        description: "The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.",
        image: "assets/images/pokemons/0002.png"
    },
    {
        id: 3,
        name: "Venusaur",
        type: "Grass, Poison",
        description: "While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.",
        image: "assets/images/pokemons/0003.png"
    },
    {
        id: 4,
        name: "Charmander",
        type: "Fire",
        description: "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.",
        image: "assets/images/pokemons/0004.png"
    }
]

// ------ Selectors ------
const pokeForm = document.querySelector(".pokeForm")
const search = document.querySelector(".search-bar");

const main = document.querySelector(".main");
const divContainer = document.createElement("div");
divContainer.classList = "container";

// ------ Created items ------
let title = document.createElement("h2");
let pokeType = document.createElement("p");
pokeType.classList = "type";

let pokeImg = document.createElement("img");
pokeImg.classList.add("pokeImg");


pokeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const val = Number(search.value);
    const pokemon = pokedex.find(p => p.id === val);

    if (!pokemon) {
        title.innerText = "No Pokémon found";
        return;
    }

    title.innerText = pokemon.name;
    pokeImg.src = pokemon.image;
    pokeType.innerText = pokemon.type;

    search.value = "";
});


divContainer.appendChild(title);
divContainer.appendChild(pokeImg);
divContainer.appendChild(pokeType);

main.appendChild(divContainer);