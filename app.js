//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

let sorteados = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert("Insira o nome de um amigo.");
        inputAmigo.focus();
        return;
}

    if (amigos.includes(nomeAmigo)) {
        alert(`O nome "${nomeAmigo}" já foi adicionado. Insira um novo nome!`);
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = "";
    inputAmigo.focus();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement ('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });

    listaAmigos.style.display = "block";
}

    function sortearAmigo () {
        if (amigos.length === 0) {
            alert("Por favor, insira um nome válido.");
            return;
        }

        if (sorteados.length === amigos.length) {
            alert("Todos os amigos já foram sorteados! A rodada será reiniciada.");
            novoSorteio();
            return;
        }

        let amigoSorteado;
        do {
            const indiceSorteado = Math.floor(Math.random() * amigos.length);
            amigoSorteado = amigos [indiceSorteado];
        } while (sorteados.includes(amigoSorteado)); 

        sorteados.push(amigoSorteado);

        document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

        setTimeout(() => {
            document.getElementById('listaAmigos').style.display = "none";
        }, 500); 
    }

    function novoSorteio() {
        amigos = [];
        sorteados = [];
        atualizarListaAmigos();
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();
        document.getElementById('listaAmigos').style.display = "block";
    }