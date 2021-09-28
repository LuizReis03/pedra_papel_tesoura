const placar = {
    jogador : 0,
    computador : 0,
    jogados : 0
}

function novoPlacar() {
    document.getElementById('placar-jogador').innerText = placar.jogador;
    document.getElementById('placar-computador').innerText = placar.computador;
    document.getElementById('numero-jogos').innerText = placar.jogados;
}

function escolha() {   
    let opcaoUsuario = document.getElementById('todas-escolhas').value;

    if (opcaoUsuario == 'selecione') {
        document.getElementById('img_escolha').src = "";
        return 0;
    }
    
    switch (opcaoUsuario) {
        case 'pedra':
            document.getElementById('img_escolha').src = "img/pedra.png";
        break;
    
        case 'papel':
            document.getElementById('img_escolha').src = "img/papel.png";
        break;

        case 'tesoura':
            document.getElementById('img_escolha').src = "img/tesoura.png";
        break;
    }
}

function sorteioPc() {
    const numeroSorteado = parseInt(Math.random() * (4 - 1) + 1);

    switch (numeroSorteado) {
        case 1:
            document.getElementById('imgComputador').src = "img/papel.png";
        return 'papel';

        case 2:
            document.getElementById('imgComputador').src = "img/pedra.png";
        return 'pedra';

        case 3:
            document.getElementById('imgComputador').src = "img/tesoura.png";
        return 'tesoura';
    
    }
}

function jogar() {
    placar.jogados++
    const valorPc = sorteioPc();
    const valorUsuario = document.getElementById('todas-escolhas').value;

    if (valorUsuario == valorPc) {
        alert ('Empatou');
    }else if (valorUsuario == 'papel' && valorPc == 'pedra'){
        alert('Você ganhou!');
        placar.jogador++;
    }else if (valorUsuario == 'pedra' && valorPc == 'tesoura'){
        alert('Você ganhou!');
        placar.jogador++;
    }else if (valorUsuario == 'tesoura' && valorPc == 'papel'){
        alert('Você ganhou!');
        placar.jogador++;
    }else{
        alert('Vitória do adversário!');
        placar.computador++;
    }
    novoPlacar()
}

function reiniciarPlacar() {
    placar.jogador = 0;
    placar.computador = 0;
    placar.jogados = 0;
    
    document.getElementById('img_escolha').src = "";
    document.getElementById('imgComputador').src = "";
    novoPlacar()
}

novoPlacar()