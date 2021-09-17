var pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
for (var _i = 0, pokemon_1 = pokemon; _i < pokemon_1.length; _i++) {
    var i = pokemon_1[_i];
    console.log(i);
}
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
var Bulbasaur = { name: "Bulbasaur", age: 5, attack: function () { console.log("Bulbasaur used tackle"); } };
Bulbasaur.attack();
