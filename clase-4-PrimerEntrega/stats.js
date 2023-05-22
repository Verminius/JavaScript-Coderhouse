// Variables de stats

let strText = "Fuerza"
let dexText = "Destreza"
let conText = "Constitución"
let intText = "Inteligencia"
let wisText = "Sabiduría"
let chaText = "Carisma"

/* Función para hallar el modificador de stat */

function findModifier(stat) {
    let statNumber = parseInt(prompt("Introduce el valor de tu " + stat));

    if (statNumber > 20) {
        alert("A no ser que seas un dragón, no creo que tengas esa cantidad")
    } else if (statNumber < 1) {
        alert("No te subestimes, seguro eres mejor que esto")
    } else { alert("Tu modificador de " + stat + " es " + Math.floor((statNumber - 10) / 2)) }
}

/* Introducción y ciclo */

alert("Bienvenido a este calculador de stats de D&D 5e");
let askingStat = prompt("Selecciona el modificador de stat que deseas calcular\n 1-Fuerza \n 2-Destreza \n 3-Constitución \n 4-Inteligencia \n 5-Sabiduría \n 6-Carisma \n\n O escribe ESC para salir")


while (askingStat != "ESC") {
    if (askingStat == 1) {
        findModifier(strText)
    } else if (askingStat == 2) {
        findModifier(dexText)
    } else if (askingStat == 3) {
        findModifier(conText)
    } else if (askingStat == 4) {
        findModifier(intText)
    } else if (askingStat == 5) {
        findModifier(wisText)
    } else if (askingStat == 6) {
        findModifier(chaText)
    } else {
        alert("Ingresa una opción válida")
    }

    askingStat = prompt("Selecciona el modificador de stat que deseas calcular\n 1-Fuerza \n 2-Destreza \n 3-Constitución \n 4-Inteligencia \n 5-Sabiduría \n 6-Carisma \n\n O escribe ESC para salir")

}