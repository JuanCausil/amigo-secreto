// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista donde se guardarán los nombres de los amigos
let listaAmigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista y limpiar el input
    listaAmigos.push(nombre);
    input.value = "";
    actualizarLista();
}

// Función para actualizar la visualización de la lista en el HTML
function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((nombre) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        listaHTML.appendChild(item);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];

    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSeleccionado}</strong>! 🎉</li>`;
}
