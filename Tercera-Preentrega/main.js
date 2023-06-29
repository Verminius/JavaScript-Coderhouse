//variables
const formCrear = document.querySelector(".personaje-form");
const number = document.querySelector(".number")
let dadosStat = document.querySelector(".lanzar-dados")

const dados = [4, 6, 8, 10, 12, 20]

let clicked = false;

let crear = document.getElementById("crear");


// Funcione Lanzar dado
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
}



//Lanzar dados para Conocer Stats
dadosStat.addEventListener("click", (e) => {
    e.preventDefault();

    let number1 = document.getElementById("number1")
    let number2 = document.getElementById("number2")
    let number3 = document.getElementById("number3")
    let number4 = document.getElementById("number4")
    let number5 = document.getElementById("number5")
    let number6 = document.getElementById("number6")

    number1.innerHTML = calcularStat()
    number2.innerHTML = calcularStat()
    number3.innerHTML = calcularStat()
    number4.innerHTML = calcularStat()
    number5.innerHTML = calcularStat()
    number6.innerHTML = calcularStat()
    clicked = true;

    if (clicked == true) {
        dadosStat.innerHTML = "lanzar de nuevo"
    }
})

//Funcion Crear nuevo personaje
function crearPersonaje() {
    const nombre = document.getElementById("char-name").value;
    const raza = document.getElementById("raza").value;
    const clase = document.getElementById("clase").value;
    const fuerza = parseInt(document.getElementById("fuerza").value);
    const destreza = parseInt(document.getElementById("destreza").value);
    const constitucion = parseInt(document.getElementById("constitucion").value);
    const inteligencia = parseInt(document.getElementById("inteligencia").value);
    const sabiduria = parseInt(document.getElementById("sabiduria").value);
    const carisma = parseInt(document.getElementById("carisma").value);

    const stat = new Stat(fuerza, destreza, constitucion, inteligencia, sabiduria, carisma);
    const personaje = new Personaje(nombre, raza, clase, stat);

    let personajesExistentes = localStorage.getItem("personajes");
    if (personajesExistentes) {
        personajesExistentes = JSON.parse(personajesExistentes);
    } else {
        personajesExistentes = [];
    }


    personajesExistentes.push(personaje);


    localStorage.setItem("personajes", JSON.stringify(personajesExistentes));
}



crear.addEventListener("click", (e) => {
    e.preventDefault()

    crearPersonaje()

    formCrear.reset()

    setTimeout(() => {
        location.assign("./index.html")
    }, 300);
})