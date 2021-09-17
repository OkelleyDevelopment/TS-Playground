let pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

for (const i of pokemon) {
    console.log(i);
}

enum Color { Red, Green, Blue };
let c: Color = Color.Red;

interface Pokemon {
    name: string;
    age?: number;
    attack(): void;
}

let Bulbasaur: Pokemon  = {name: "Bulbasaur", age: 5, attack: () => {console.log("Bulbasaur used tackle")}};

Bulbasaur.attack()
