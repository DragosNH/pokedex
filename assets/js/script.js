pokedex = [
    {
        id: 1,
        name: "Bulbasaur",
        type1: "Grass",
        type2: "Poison",
        description: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
        image: "assets/images/pokemons/0001.png"
    },
    {
        id: 2,
        name: "Ivysaur",
        type1: "Grass",
        type2: "Poison",
        description: "The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.",
        image: "assets/images/pokemons/0002.png"
    },
    {
        id: 3,
        name: "Venusaur",
        type1: "Grass",
        type2: "Poison",
        description: "While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.",
        image: "assets/images/pokemons/0003.png"
    },
    {
        id: 4,
        name: "Charmander",
        type1: "Fire",
        type2: "",
        description: "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.",
        image: "assets/images/pokemons/0004.png"
    }
]

// ------ Selectors ------
const pokeForm = document.querySelector(".pokeForm")
const search = document.querySelector(".search-bar");

const main = document.querySelector(".main");

pokeForm.addEventListener("submit", (e) => {
    // ------ Created items ------
    const divContainer = document.createElement("div");
    divContainer.classList = "container";
    let title = document.createElement("h2");
    let types = document.createElement("div");
    types.classList.add("types");
    let pokeTypeOne = document.createElement("p");
    let pokeTypeTwo = document.createElement("p");
    pokeTypeOne.classList = "type";
    pokeTypeTwo.classList = "type";

    let pokeImg = document.createElement("img");
    pokeImg.classList.add("pokeImg");

    let pokeDescription = document.createElement("p");
    pokeDescription.classList.add("description");

    e.preventDefault();

    const val = Number(search.value);
    const pokemon = pokedex.find(p => p.id === val);

    if (!pokemon) {
        title.innerText = "No Pokémon found";
        pokeImg.src = "";
        pokeTypeOne.innerText = "";
        pokeTypeTwo.innerText = "";
        pokeDescription.innerText = "";
        return;
    }

    title.innerText = pokemon.name;
    pokeImg.src = pokemon.image;
    pokeTypeOne.innerText = pokemon.type1;
    pokeTypeTwo.innerText = pokemon.type2;
    pokeDescription.innerText = pokemon.description;

    search.value = "";

    switch(pokemon.type1){
        case "Grass":
            pokeTypeOne.style.backgroundColor = "Green";
            pokeTypeOne.style.color = "White";
            break;
        case "Poison":
            pokeTypeOne.style.backgroundColor = "Purple";
            pokeTypeOne.style.color = "White";
            break;
    }

    switch(pokemon.type2){
        case "Grass":
            pokeTypeTwo.style.backgroundColor = "Green";
            pokeTypeTwo.style.color = "White";
            break;
        case "Poison":
            pokeTypeTwo.style.backgroundColor = "Purple";
            pokeTypeTwo.style.color = "White";
            break;
    }

    // --------- Appended elements ---------
    divContainer.appendChild(title);
    divContainer.appendChild(pokeImg);
    divContainer.appendChild(types);
    types.appendChild(pokeTypeOne);
    types.appendChild(pokeTypeTwo);
    divContainer.appendChild(pokeDescription);
    main.appendChild(divContainer);

});
