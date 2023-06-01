//Objetos
// ---------Literales

const personaje = {
  id: 01,
  name: "Belenus",
  background: "Charlatan",
  str: 10,
  dex: 14,
  con: 18,
  int: 16,
  wis: 12,
  cha: 18,
};

//Llamar Objeto
console.log(personaje);

//Llamar propiedad de Objeto
console.log(personaje.background);

//Modificar propiedad dentro de Objeto
personaje.str = 12;
console.log(personaje);

//Otra forma de cambiar propiedades del Objeto
personaje["str"] = 14;
console.log(personaje);

//Agregar nueva propiedad a Objeto
personaje.lvl = 1;
console.log(personaje);

//Eliminar propiedad a Objeto
delete personaje.id;
console.log(personaje);

//Agregando propiedades de Objeto a String
console.log("Tu personaje " + personaje.name + " es de nivel " + personaje.lvl);
console.log(
  "Tu personaje " +
    personaje.name +
    " tiene un Carisma igual a " +
    personaje.cha
);

// ---------Constructores
//Sintaxis
function Personaje(
  id,
  name,
  cla,
  lvl,
  background,
  str,
  dex,
  con,
  int,
  wis,
  cha
) {
  this.id = id;
  this.name = name;
  this.cla = cla;
  this.lvl = lvl;
  this.background = background;
  this.str = str;
  this.dex = dex;
  this.con = con;
  this.int = int;
  this.wis = wis;
  this.cha = cha;

  //Metodo

  this.describir = function () {
    console.log(
      "¡Hola extraño! Mi nombre es " +
        this.name +
        " y soy un " +
        this.cla +
        " " +
        this.background +
        " de nivel " +
        this.lvl +
        "."
    );
  };
}

//Nuevas instancias
const personaje1 = new Personaje(
  02,
  "Verminius",
  "Barbaro",
  4,
  "Soldado",
  19,
  14,
  16,
  11,
  10,
  8
);
console.log(personaje1);

const personaje2 = new Personaje(
  03,
  "Baltazar",
  "Bardo",
  6,
  "Artista",
  10,
  16,
  18,
  8,
  12,
  20
);
console.log(personaje2);

const personaje3 = new Personaje(
  04,
  "Nathaniel",
  "Paladin",
  4,
  "Embrujado",
  20,
  14,
  16,
  9,
  10,
  16
);
console.log(personaje3);

//Metodos de Strings
let oracion = "Tu personaje camina por el pantano";
console.log(oracion.toLowerCase()); //Todo a minuscula
console.log(oracion.toUpperCase()); //Todo a mayuscula

console.log(oracion.length); //longitud del string

//Viendo metodo en objeto creado
personaje1.describir();
personaje2.describir();
personaje3.describir();

// for-in
for (const prop in personaje1) {
  console.log(prop, personaje3[prop]);
}

// ---------Clases
class Weapon {
  //Propiedades
  constructor(name, weaponType, dmg, dmgType) {
    this.name = name.toUpperCase();
    this.weaponType = weaponType;
    this.dmg = dmg;
    this.dmgType = dmgType;
    this.vinculada = true;
  }

  //Métodos
  presentar() {
    console.log(
      "Esta es la poderosa " +
        this.name +
        " una " +
        this.weaponType +
        " capás de hacer un daño de " +
        this.dmg +
        " de daño " +
        this.dmgType +
        "."
    );
  }

  vincular() {
    this.vinculada = true;
  }

  atacar() {
    console.log(Math.floor(Math.random() * 20 + 1));
  }

  dañar() {
    console.log(
      Math.floor(Math.random() * 8 + 1) + Math.floor(Math.random() * 8 + 1)
    );
  }
}

const weapon1 = new Weapon("Mata dragones", "espada larga", "2d8", "cortante");
console.log(weapon1);
weapon1.presentar();
weapon1.atacar();
weapon1.dañar();
