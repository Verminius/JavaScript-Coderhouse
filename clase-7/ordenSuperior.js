//Funciones de Orden Superior

//funcion que retorna funcion
// function evaluarVelocidadPermitida(minima, maxima) {
//   return (velocidad) => minima <= velocidad && velocidad <= maxima;
// }

// const velocidadActual = evaluarVelocidadPermitida(60, 130);

// console.log(velocidadActual(65));

// //funcion de recibe parametro
// const precios = [1000, 2000, 1900, 10000];

// function porCadaUno(arr, fn) {
//   for (const elemento of arr) {
//     console.log(fn(elemento));
//   }
// }

// function sumarIva(precio) {
//   return precio * 1.19;
// }

// porCadaUno(precios, sumarIva);

// const nombres = ["Sebastian", "Selena", "Angela"];

// function paraAMayusculas(palabras) {
//   return palabras.toUpperCase();
// }

// porCadaUno(nombres, paraAMayusculas);

//metodos de arrays
const personajes = [
  {
    id: 01,
    nombre: "Michi",
    clase: "Picaro",
    trasfondo: "Atleta",
    nivel: 1,
    fuerza: 10,
    destreza: 18,
    constitución: 14,
    inteligencia: 10,
    sabiduría: 14,
    carisma: 12,
  },
  {
    id: 02,
    nombre: "Naewa",
    clase: "Druida",
    trasfondo: "Hermitaño",
    nivel: 1,
    fuerza: 10,
    destreza: 12,
    constitución: 16,
    inteligencia: 14,
    sabiduría: 18,
    carisma: 12,
  },
  {
    id: 03,
    nombre: "Arietis",
    clase: "Artifice",
    trasfondo: "Criminal",
    nivel: 1,
    fuerza: 10,
    destreza: 14,
    constitución: 16,
    inteligencia: 20,
    sabiduría: 12,
    carisma: 10,
  },
];

//metodo forEach()
personajes.forEach((personaje) =>
  console.log(personaje.nombre, personaje.clase)
);

//metodo find()
const encontrado = personajes.find((personaje) => personaje.nombre == "Naewa");

if (encontrado != undefined) {
  console.log(encontrado);
} else {
  console.log("No encontrado");
}

//metodo filter()
const carismaticos = personajes.filter(
  (personaje) => personaje.constitución == 16
);
console.log(carismaticos);

//metodo some()

const existe = personajes.some((personaje) => personaje.nombre == "Arietis");
console.log(existe);

//metodo map()
const nombresPersonajes = personajes.map((personaje) => {
  return {
    nombre: personaje.nombre,
    clase: personaje.clase,
  };
});
console.log(nombresPersonajes);

//metodo reduce()

//metodo sort()
