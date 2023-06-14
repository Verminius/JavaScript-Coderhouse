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
        return 10 + this.calcularModificador(this.destreza)
    }


}



// Solicitar info

var nombre = prompt("Ingresa el nombre de tu personaje:");
var clase = prompt("Escoje una clase: \n- Barbaro \n- Bardo \n- Brujo \n- Clérigo \n- Druida \n- Explorador \n- Guerrero \n- Hechicero \n- Mago \n- Monje \n- Paladin \n- Picaro");
var raza = prompt("Escoje una raza: \n- Enano \n- Elfo \n- Mediano \n- Humano \n- Dracónido \n- Gnomo \n- Semielfo \n- Semiorco \n- Tiflin");
var fuerza = parseInt(prompt("Ingresa la Fuerza de tu personaje:"));
var destreza = parseInt(prompt("Ingresa la Destreza de tu personaje:"));
var constitucion = parseInt(prompt("Ingresa la Constitución de tu personaje:"));
var inteligencia = parseInt(prompt("Ingresa la Inteligencia de tu personaje:"));
var sabiduria = parseInt(prompt("Ingresa la Sabiduría de tu personaje:"));
var carisma = parseInt(prompt("Ingresa la Carisma de tu personaje:"));



// Crear un personaje

var personaje = new Personaje(nombre, clase, raza, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma);



// Hoja de Personaje

var hojaDePersonaje = "Datos del personaje:\n\n";
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