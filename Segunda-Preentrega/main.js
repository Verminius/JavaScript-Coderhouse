// Dados
const dados = [4, 6, 8, 10, 12, 20]


// Funciones
function lanzarDado(dado) {
    let lanzar = Math.floor((Math.random() * dado) + 1)
    return lanzar
}

function calcularStat() {
    let sumaD6 = [lanzarDado(dados[1]),
        lanzarDado(dados[1]),
        lanzarDado(dados[1]),
        lanzarDado(dados[1]),
    ]

    sumaD6.sort((a, b) => a - b)
        // console.log(sumaD6)

    sumaD6.shift(0)
        // console.log(sumaD6)

    let total = sumaD6.reduce((acc, num) => {
        return acc + num;
    })

    return total
        // console.log(total)
}


// Objeto Personaje

class Personaje {
    constructor(nombre, clase, raza, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma) {
        this.nombre = nombre;
        this.clase = clase;
        this.raza = raza;
        this.fuerza = fuerza;
        this.destreza = destreza;
        this.constitucion = constitucion;
        this.inteligencia = inteligencia;
        this.sabiduria = sabiduria;
        this.carisma = carisma;
    }

    // Métodos 
    calcularModificador(estadistica) {
        return Math.floor((estadistica - 10) / 2);
    }

    calcularAc() {
        return 10 + this.calcularModificador(this.destreza);
    }
};



// Solicitar info

let nombre = prompt("Ingresa el nombre de tu personaje:");
let clase = prompt("Escoje una clase: \n- Barbaro \n- Bardo \n- Brujo \n- Clérigo \n- Druida \n- Explorador \n- Guerrero \n- Hechicero \n- Mago \n- Monje \n- Paladin \n- Picaro");
let raza = prompt("Escoje una raza: \n- Enano \n- Elfo \n- Mediano \n- Humano \n- Dracónido \n- Gnomo \n- Semielfo \n- Semiorco \n- Tiflin");


// Crear un personaje

let personaje = new Personaje(nombre, clase, raza, calcularStat(), calcularStat(), calcularStat(), calcularStat(), calcularStat(), calcularStat());


// Hoja de Personaje

let hojaDePersonaje = "Datos del personaje:\n\n";
hojaDePersonaje += "Nombre: " + personaje.nombre + "\n";
hojaDePersonaje += "Clase: " + personaje.clase + "\n";
hojaDePersonaje += "Raza: " + personaje.raza + "\n\n";
hojaDePersonaje += "Estadísticas:\n";
hojaDePersonaje += "Fuerza: " + personaje.fuerza + " (Modificador: " + personaje.calcularModificador(personaje.fuerza) + ")\n";
hojaDePersonaje += "Destreza: " + personaje.destreza + " (Modificador: " + personaje.calcularModificador(personaje.destreza) + ")\n";
hojaDePersonaje += "Constitución: " + personaje.constitucion + " (Modificador: " + personaje.calcularModificador(personaje.constitucion) + ")\n";
hojaDePersonaje += "Inteligencia: " + personaje.inteligencia + " (Modificador: " + personaje.calcularModificador(personaje.inteligencia) + ")\n";
hojaDePersonaje += "Sabiduría: " + personaje.sabiduria + " (Modificador: " + personaje.calcularModificador(personaje.sabiduria) + ")\n";
hojaDePersonaje += "Carisma: " + personaje.carisma + " (Modificador: " + personaje.calcularModificador(personaje.carisma) + ")\n\n";
hojaDePersonaje += "Clase de Armadura:" + personaje.calcularAc();

alert(hojaDePersonaje);