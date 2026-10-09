let listaDeTeclas = document.querySelectorAll(".tecla");

let midias = {

    som_gta: "./assents/SonsRetro/GTA.jpg",
    som_pulo: "./assents/SonsRetro/pulo.jpg",
    som_tiro: "./assents/SonsRetro/tiro.jpg",
    som_moeda: "./assents/SonsRetro/dinheiro.jpg",
    som_erro: "./assents/SonsRetro/erro.jpg",
    som_vitoria: "./assents/SonsRetro/vitoria.jpg",

    som_mibombo: "./assents/Memes/mibombo.jpg",
    som_berinjela: "./assents/Memes/berinjela.jpg",
    som_fahh: "./assents/Memes/fahh.jpg",
    som_impostor: "./assents/Memes/impostor.gif",
    som_grito: "./assents/Memes/grito.jpg",
    som_dexter: "./assents/Memes/dexter.jpg",

    som_bemtivi: "./assents/Animais/bemtivi.jpg",
    som_cachorro: "./assents/Animais/cachorro.jpg",
    som_gato: "./assents/Animais/gato.jpg",
    som_leao: "./assents/Animais/leao.jpg",
    som_vaca: "./assents/Animais/vaca.jpg",
    som_cavalo: "./assents/Animais/cavalo.jpg"
};


function tocarSom(audio, midia){

    document.querySelectorAll("audio").forEach(function(som){
        som.pause();
        som.currentTime = 0;
    });

    document.querySelector(audio).play();

    let imagem = document.querySelector("#imagem");

    if(midia.endsWith(".mp4")){

        imagem.outerHTML = `<video id="imagem" src="${midia}" autoplay loop muted controls></video>`;

    }else{

        imagem.outerHTML = `<img id="imagem" src="${midia}" alt="">`;

    }
}

let contador = 0;

while(contador < listaDeTeclas.length){

    let tecla = listaDeTeclas[contador];

    let instrumento = tecla.classList[1];

    let audio = `#som_${instrumento}`;

    tecla.onclick = function(){

        tocarSom(audio, midias[instrumento]);

    };

    contador++;
}