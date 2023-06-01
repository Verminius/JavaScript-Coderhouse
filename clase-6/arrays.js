// //listas

// const skills = [
//   "Fuerza",
//   "Destreza",
//   "Constitución",
//   "Inteligencia",
//   "Sabiduría",
//   "Carisma",
// ];

// console.log(skills);

// for (let i = 0; i < skills.length; i++) {
//   console.log(skills[i]);
// }

// //metodo push
// skills.push("Apariencia");
// console.log(skills);

// //metodo unshift
// skills.unshift("Percepcion");
// console.log(skills);

// //metodo pop
// skills.pop();
// console.log(skills);

// //metodo shift
// skills.shift();
// console.log(skills);

// //metodo splice
// skills.splice(3, 5);
// console.log(skills);

// skills.splice(3, 0, "Apariencia");
// console.log(skills);

// //metodo join
// console.log(skills.join(" | "));

// //metodo concat
// const meleeWeapons = ["Espada", "Hacha", "Lanza"];
// const rangeWeapons = ["Arco Largo", "Ballesta", "Javalina"];

// console.log(meleeWeapons);
// console.log(rangeWeapons);

// const weapons = meleeWeapons.concat(rangeWeapons);
// console.log(weapons);

// //metodo slice
// const equipedWeapons = weapons.slice(2, 4);
// console.log(equipedWeapons);

// //metodo indexOf

// //metodo includes

// //metodo reverse
// console.log(weapons.reverse());

//arrays de objetos

// const stats = [
//   { nombre: "fuerza", valor: 18, modificador: 4 },
//   { nombre: "destreza", valor: 16, modificador: 3 },
//   { nombre: "constitución", valor: 18, modificador: 4 },
//   { nombre: "inteligencia", valor: 10, modificador: 0 },
//   { nombre: "sabiduría", valor: 14, modificador: 2 },
//   { nombre: "carisma", valor: 12, modificador: 1 },
// ];

// console.log(stats);
// console.log(stats[1]);

// //for of
// for (const stat of stats) {
//   console.log(
//     "tu modificador de " + stat.nombre + " es de " + stat.modificador
//   );
// }

//Crear objeto
class Stat {
  constructor(nombre, valor) {
    this.nombre = nombre.toLowerCase();
    this.valor = parseInt(valor);
  }

  calcularMod() {
    this.mod = Math.floor((this.valor - 10) / 2);
    console.log("tu modificador de " + this.nombre + " es de " + this.mod);
  }
}

//Declarar array de stats a almacenar
const stats = [];
stats.push(new Stat("Fuerza", "18"));
stats.push(new Stat("Destreza", "16"));
stats.push(new Stat("Constitución", "18"));
stats.push(new Stat("Insteligencia", "8"));
stats.push(new Stat("Sabiduría", "12"));
stats.push(new Stat("Carisma", "14"));

//Ejecutar metodo dentro del array
stats[5].calcularMod();
