let listaAmigos = [];

function limpiarCaja(elemento){
    document.querySelector(elemento).value = '';
}

function borrarLista(lista){
    document.querySelector(lista).innerHTML = "";
}

function llenarLista(texto, elemento){
    let nodo = document.createElement('li');
    let textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    document.querySelector(elemento).appendChild(nodo);
}

function agregarAmigo(){
    let nombre = document.querySelector('#amigo').value;

    if (nombre == ''){
        alert('Por favor, ingrese un nombre válido');
    } else {
        listaAmigos.push(nombre);
        limpiarCaja('#amigo');
        llenarLista(nombre, '#listaAmigos')
        console.log(listaAmigos);
    }
}

function sortearAmigo(){
    borrarLista('#resultado')
    let amigoSecreto = listaAmigos[Math.floor(Math.random()*listaAmigos.length)]
    
    if (listaAmigos.length <= 1){
        alert('Por favor, ingrese al menos dos nombres para sortear a un amigo secreto')
    } else {
        borrarLista('#listaAmigos')
        llenarLista(`El amigo secreto sorteado es: ${amigoSecreto}`, '#resultado')
        listaAmigos = [];
    }  
}