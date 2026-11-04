const tirarBtn = document.getElementById("tirarBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");

const arriba = document.getElementById("arriba");
const izquierda = document.getElementById("izquierda");
const derecha = document.getElementById("derecha");
const abajo = document.getElementById("abajo");

const totalCartas = 28;

function obtenerCartasAleatorias() {

    let disponibles = [];

    for(let i = 1; i <= totalCartas; i++){
        disponibles.push(i);
    }

    let seleccionadas = [];

    while(seleccionadas.length < 4){

        const indice =
            Math.floor(Math.random() * disponibles.length);

        seleccionadas.push(
            disponibles[indice]
        );

        disponibles.splice(indice, 1);
    }

    return seleccionadas;
}

function mostrarCarta(contenedor, numero){

    contenedor.innerHTML = `
        <img src="${numero}.png" alt="Carta ${numero}">
    `;
}

tirarBtn.addEventListener("click", () => {

    const cartas = obtenerCartasAleatorias();

    mostrarCarta(arriba, cartas[0]);
    mostrarCarta(izquierda, cartas[1]);
    mostrarCarta(derecha, cartas[2]);
    mostrarCarta(abajo, cartas[3]);

    tirarBtn.disabled = true;

    reiniciarBtn.classList.remove("oculto");
});

reiniciarBtn.addEventListener("click", () => {

    arriba.innerHTML = "";
    izquierda.innerHTML = "";
    derecha.innerHTML = "";
    abajo.innerHTML = "";

    tirarBtn.disabled = false;

    reiniciarBtn.classList.add("oculto");
});