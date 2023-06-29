//obtejo personaje
class Personaje {
    constructor(nombre, objetoRaza, objetoClase, objetoStats) {
        this.nombre = nombre;
        this.objetoRaza = objetoRaza;
        this.objetoClase = objetoClase;
        this.objetoStats = objetoStats;
    }
};


//objeto stats
class Stat {
    constructor(str, dex, con, int, wis, cha) {
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }

    // Métodos 
    calcularModificador(estadistica) {
        return Math.floor((estadistica - 10) / 2);
    }
}

//objeto raza
class Raza {
    constructor(descripcion, ASI, tamaño, velocidad, lenguaje) {
        this.descripcion = descripcion;
        this.ASI = ASI;
        this.tamaño = tamaño;
        this.velocidad = velocidad;
        this.lenguaje = lenguaje
    }
}


//razas
const humano = new Raza("Los humanos son la más joven de las razas comunes, con una llegada tardía al mundo y una vida corta en comparación con los enanos, elfos, y dragones. Quizás es por su corta vida que se esfuerzan en conseguir tanto como pueden en los años que se les han dado. O quizás sienten que tienen algo que demostrar a las razas más antiguas, y es por eso que construyen poderosos imperios basados en la conquista y el comercio. Sea lo que sea lo que les motiva, los humanos son los innovadores, los pioneros y los triunfadores de los mundos", 1, "Mediano", 30, "común")

const enano = new Raza("Reinos ricos en antiguo esplendor, salas esculpidas en las raíces de las montañas, picos y martillos haciéndose eco en profundas minas y ardientes forjas, un compromiso con el clan y las tradiciones y un odio ardiente hacia orcos y goblins —estos temas comunes unen a todos los enanos", 1, "Mediano", 25, "común y enano")

const elfo = new Raza("Los elfos son un pueblo mágico de gracia sobrenatural, viviendo en el mundo sin ser del todo parte de él. Viven en lugares de etérea belleza, en medio de antiguos bosques o en plateados minaretes que resplandecen con luz feérica, donde una suave música flota en el aire y delicadas fragancias son transportadas por la brisa. Los elfos aman la naturaleza y la magia, el arte y la maestría, la música y la poesía, y las cosas buenas del mundo.", 1, "Mediano", 30, "común y elfico")

const razas = [humano, enano, elfo]