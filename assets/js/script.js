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
    },
    {
        id: 5,
        name: "Charmeleon",
        type1: "Fire",
        type2: "",
        description: "When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents.",
        image: "assets/images/pokemons/0005.png"
    },
    {
        id: 6,
        name: "Charizard",
        type1: "Fire",
        type2: "Flying",
        description: "If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.",
        image: "assets/images/pokemons/0006.png"
    },
    {
        id: 7,
        name: "Squirtle",
        type1: "Water",
        type2: "",
        description: "After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.",
        image: "assets/images/pokemons/0007.png"
    },
    {
        id: 8,
        name: "Wartortle",
        type1: "Water",
        type2: "",
        description: "Wartortle's long, furry tail is a symbol of longevity, so this Pokémon is quite popular among older people.",
        image: "assets/images/pokemons/0008.png"
    },
    {
        id: 9,
        name: "Charizard",
        type1: "Water",
        type2: "",
        description: "It deliberately increases its body weight so it can withstand the recoil of the water jets it fires.",
        image: "assets/images/pokemons/0009.png"
    },
    {
        id: 10,
        name: "Caterpie",
        type1: "Bug",
        type2: "",
        description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        image: "assets/images/pokemons/0010.png"
    },
    {
        id: 11,
        name: "Metapod",
        type1: "Bug",
        type2: "",
        description: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        image: "assets/images/pokemons/0011.png"
    },
    {
        id: 12,
        name: "Butterfree",
        type1: "Bug",
        type2: "Flying",
        description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        image: "assets/images/pokemons/0012.png"
    },
]

// ------ Selectors ------
const pokeForm = document.querySelector(".pokeForm")
const search = document.querySelector(".search-bar");

const cardArea = document.querySelector(".card-area");

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

    switch (pokemon.type1) {
        case "Grass":
            pokeTypeOne.style.backgroundColor = "#92bf19";
            pokeTypeOne.style.color = "White";
            break;
        case "Poison":
            pokeTypeOne.style.backgroundColor = "#be78be";
            pokeTypeOne.style.color = "White";
            break;
        case "Fire":
            pokeTypeOne.style.backgroundColor = "#ff3700";
            pokeTypeOne.style.color = "White";
            break;
        case "Flying":
            pokeTypeOne.style.backgroundColor = "#79bcd7";
            pokeTypeOne.style.color = "White";
            break;
        case "Water":
            pokeTypeOne.style.backgroundColor = "#0094e5";
            pokeTypeOne.style.color = "White";
            break;
        case "Bug":
            pokeTypeOne.style.backgroundColor = "#32b432";
            pokeTypeOne.style.color = "White";
            break;
    }

    switch (pokemon.type2) {
        case "Grass":
            pokeTypeTwo.style.backgroundColor = "#92bf19";
            pokeTypeTwo.style.color = "White";
            break;
        case "Poison":
            pokeTypeTwo.style.backgroundColor = "#be78be";
            pokeTypeTwo.style.color = "White";
            break;
        case "Fire":
            pokeTypeTwo.style.backgroundColor = "#ff3700";
            pokeTypeTwo.style.color = "White";
            break;
        case "Flying":
            pokeTypeTwo.style.backgroundColor = "#79bcd7";
            pokeTypeTwo.style.color = "White";
            break;
        case "Water":
            pokeTypeTwo.style.backgroundColor = "#0094e5";
            pokeTypeTwo.style.color = "White";
            break;
        case "Bug":
            pokeTypeTwo.style.backgroundColor = "#32b432";
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
    cardArea.innerHTML = "";
    cardArea.appendChild(divContainer);

});
