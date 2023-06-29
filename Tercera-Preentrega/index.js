//variables
let btnCreate = document.getElementById("btn")

btnCreate.addEventListener("click", () => {
    setTimeout(() => {
        location.assign("/Tercera-Preentrega/crear-personaje.html")
    }, 500);
})

function mostrarPersonajes() {

    const containerTarjetas = document.getElementById("tarjetas-container")
    const personajes = JSON.parse(localStorage.getItem("personajes"));

    if (!personajes || personajes.length === 0) {
        containerTarjetas.innerHTML = '<p class="grey">Aún no has creado ningún personaje</p>';
        return;
    }

    // Crear tarjeta para cada personaje
    personajes.forEach((personaje) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const nombre = document.createElement("h2");
        nombre.textContent = personaje.nombre;
        tarjeta.appendChild(nombre);

        const raza = document.createElement("p");
        raza.textContent = "Raza: " + personaje.objetoRaza;
        tarjeta.appendChild(raza);

        const clase = document.createElement("p");
        clase.textContent = "Clase: " + personaje.objetoClase;
        tarjeta.appendChild(clase);

        const stats = document.createElement("ul");
        let statsItems = document.createElement("li");
        statsItems.textContent = "Fuerza: " + personaje.objetoStats.str;
        stats.appendChild(statsItems);

        statsItems = document.createElement("li");
        statsItems.textContent = "Destreza: " + personaje.objetoStats.dex;
        stats.appendChild(statsItems);

        statsItems = document.createElement("li");
        statsItems.textContent = "Constitución: " + personaje.objetoStats.con;
        stats.appendChild(statsItems);

        statsItems = document.createElement("li");
        statsItems.textContent = "Inteligencia: " + personaje.objetoStats.int;
        stats.appendChild(statsItems);

        statsItems = document.createElement("li");
        statsItems.textContent = "Sabiduría: " + personaje.objetoStats.wis;
        stats.appendChild(statsItems);

        statsItems = document.createElement("li");
        statsItems.textContent = "Carisma: " + personaje.objetoStats.cha;
        stats.appendChild(statsItems);

        tarjeta.appendChild(stats);

        document.getElementById("tarjetas-container").appendChild(tarjeta);
    });
}

mostrarPersonajes();