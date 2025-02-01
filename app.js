// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = []

function agregarAmigo() {

    let amigo = document.getElementById('amigo').value

    if (amigo === '' || amigo === ' ') {
        alert("Debes ingresar un nombre valido")
        return
    }

    amigos.push(amigo)

    let nuevoAmigo = document.createElement('li')
    nuevoAmigo.textContent = amigo
    document.getElementById('listaAmigos').appendChild(nuevoAmigo)
    document.getElementById('amigo').value = ''

}

function sortearAmigo() {

    if (amigos.length <= 0) {
        alert("No hay amigos en la lista")
    }

    let index = Math.floor(Math.random() * amigos.length)
    let amigoSecreto = document.createElement('li')
    amigoSecreto.textContent = amigos[index]
    let resultado = document.getElementById('resultado')

    if (resultado.children.length > 0) {
        resultado.replaceChild(amigoSecreto, resultado.children[0])
    } else {
        resultado.appendChild(amigoSecreto)
    }

}