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

    calcularModFuerza() {
        Math.floor((this.fuerza - 10) / 2);
    }
};

// Solicitar info

let personaje1 = new Personaje(
    prompt("Ingresa el nombre de tu personaje:"),
    prompt("Ingresa la clase de tu personaje:"),
    prompt("Ingresa la raza de tu personaje:"),
    parseInt(prompt("Ingresa la estadística de Fuerza:")),
    parseInt(prompt("Ingresa la estadística de Destreza:")),
    parseInt(prompt("Ingresa la estadística de Constitución:")),
    parseInt(prompt("Ingresa la estadística de Inteligencia:")),
    parseInt(prompt("Ingresa la estadística de Sabiduría:")),
    parseInt(prompt("Ingresa la estadística de Carisma:")),
)



// Ver hoja de personaje
var mensaje = "Datos del personaje:\n\n";
mensaje += "Nombre: " + personaje1.nombre + "\n";
mensaje += "Clase: " + personaje1.clase + "\n";
mensaje += "Raza: " + personaje1.raza + "\n\n";
mensaje += "Estadísticas:\n";
mensaje += "Fuerza: " + personaje1.fuerza + "\n";
mensaje += "Modificador: " + personaje1.calcularModFuerza() + "\n";
mensaje += "Destreza: " + personaje1.destreza + "\n";
mensaje += "Constitución: " + personaje1.constitucion + "\n";
mensaje += "Inteligencia: " + personaje1.inteligencia + "\n";
mensaje += "Sabiduría: " + personaje1.sabiduria + "\n";
mensaje += "Carisma: " + personaje1.carisma + "\n";

alert(mensaje);