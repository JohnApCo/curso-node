/*const john = {
  nombre: "john",
  apellido: "apaza",
  edad: 26
};

let { nombre, edad, apellido } = john;
console.log(
  `mis datos son: nombre=${nombre}, edad=${edad} apellido=${apellido}`
);*/

//fetch
/*
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error));

console.log("Lista de pokemones");
*/
//async await
/*
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();
*/
//Map
/*
const obtenerPokemones = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      console.log(data.results);
      let arrayNombre=data.results.map(poke => poke.name)
      console.log(arrayNombre);
    } catch (error) {
      console.log(error);
    }
  };
  obtenerPokemones();
  */
  //Filter
  /*
const obtenerPokemones = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      console.log(data.results);
      let arrayNombre=data.results.filter(poke => poke.name==='bulbasour')
      console.log(arrayNombre);
    } catch (error) {
      console.log(error);
    }
  };
  obtenerPokemones();
  */