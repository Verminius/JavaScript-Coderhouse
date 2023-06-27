//variables
let btnCreate = document.getElementById("btn")
const number = document.getElementsByClassName("number")
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


}


//eventos

btnCreate.addEventListener("click", () => {
    setTimeout(() => {
        location.assign("/Tercera-Preentrega/crear-personaje.html")
    }, 500);
})

function crearNuevoPersonaje() {
    const nombre = document.getElementById("char-name").value;
    const raza = document.getElementsByClassName("raza").value;
    const clas = document.getElementsByClassName("clase").value;
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

    console.log("Personaje guardado en localStorage:", personaje);
}