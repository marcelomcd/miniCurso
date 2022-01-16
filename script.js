const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

const imagem2 = document.querySelector('img2');
const botao2 = document.querySelector('button2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');

const imagem3 = document.querySelector('img3');
const botao3 = document.querySelector('button3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#status3');

const botao4 = document.querySelector('button4');


traduzirCondicao = traduzirCondicao2 = traduzirCondicao3 = (data) => {
    if(data.status == 'unknown'){
        return 'Não Sabemos';
    }else if(data.status == 'Alive'){
        return 'Vivo';
    }else {
        return 'Morto';
    }
}

traduzirEspecie = traduzirEspecie2 = traduzirEspecie3 = (data) => {
    if(data.species == 'unknown'){
        return 'Desconhecido';
    }else if(data.species == 'Human'){
        return 'Humano';
    }else if(data.species == 'Alien'){
        return 'Alieníngena';
    }else if(data.species == 'Robot'){
        return 'Robô';
    }else if(data.species == 'Humanoid'){
        return 'Humanóide';
    }else if(data.species == 'Poopybutthole'){
        return 'Bunda de Cocô';
    }else if(data.species == 'Animal'){
        return 'Animal';
    }else if(data.species == 'Mythological Creature'){
        return 'Criatura Mitológica'
    }else {
        return 'Indefinido';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 826);
}
gerarValorAletorio2 = () => {
    return Math.floor(Math.random() * 826);
}
gerarValorAletorio3 = () => {
    return Math.floor(Math.random() * 826);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = traduzirEspecie(data);
        condicao.innerHTML = traduzirCondicao(data);
    });

}

botao.onclick = pegarPersonagem

pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAletorio2();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        img2.src = data.image;
        img2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = traduzirEspecie2(data);
        condicao2.innerHTML = traduzirCondicao2(data);
    });

}

pegarPersonagem3 = () => {
    let numeroAleatorio = gerarValorAletorio3();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        img3.src = data.image;
        img3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = traduzirEspecie3(data);
        condicao3.innerHTML = traduzirCondicao3(data);
    });

}
