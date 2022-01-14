const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especieDoPersonagem = document.querySelector('#especie');
const tipoDePersonagem = document.querySelector('#status');


pegarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/jason'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especieDoPersonagem.innerHTML = data.species;
        tipoDePersonagem.innerHTML = data.status;
    });
}

botao.onclick = pegarPersonagem