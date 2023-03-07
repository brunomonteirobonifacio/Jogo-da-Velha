var rodada = 0;
var jogador = 1;
var posicoesPermitidas = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9"];
var todasPosicoes = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9"];
var valoresPosicoes = [];
var venceu = false;

function escolherPosicao (id) {
    rodada++;   //  incrementa o valor da jogada
    
    if (posicoesPermitidas.includes(id)) {  // se a posicao esta disponivel
        if (!(rodada % 2 == 0)) {
            jogador = 1;
            document.getElementById(id).innerText = 'X';
        } else {
            jogador = 2;
            document.getElementById(id).innerText = 'O';
        }
        for (let i = 0; i < posicoesPermitidas.length; i++) {   //  remove a posicao escolhida da lista de permitidas
            if (id == posicoesPermitidas[i]) {
                posicoesPermitidas.splice(i,1);
                break;
            }
        }
    } else {
        alert("Posição inválida");
        rodada--;
        return;
    }

    
    for (let i = 0; i < todasPosicoes.length; i++) {
        if (document.getElementById(todasPosicoes[i]).innerText != "") {
            valoresPosicoes.push(document.getElementById(todasPosicoes[i]).innerText);    //  atualiza os valores das posicoes
        } else {
            valoresPosicoes.push(i + 1);
        }
    }   console.log(valoresPosicoes.toString())
    
    //  verifica vitoria (todos os possiveis meios de vitoria)
    if (valoresPosicoes[0] == valoresPosicoes[1] && valoresPosicoes[1] == valoresPosicoes[2]) {         // primeira linha
        venceu = true;
    } else if (valoresPosicoes[3] == valoresPosicoes[4] && valoresPosicoes[4] == valoresPosicoes[5]) {  // segunda linha
        venceu = true;
    } else if (valoresPosicoes[6] == valoresPosicoes[7] && valoresPosicoes[7] == valoresPosicoes[8]) {  // terceira linha
        venceu = true;
    } else if (valoresPosicoes[0] == valoresPosicoes[3] && valoresPosicoes[3] == valoresPosicoes[6]) {  // primeira coluna
        venceu = true;
    } else if (valoresPosicoes[1] == valoresPosicoes[4] && valoresPosicoes[4] == valoresPosicoes[7]) {  // segunda coluna
        venceu = true;
    } else if (valoresPosicoes[2] == valoresPosicoes[5] && valoresPosicoes[5] == valoresPosicoes[8]) {  // terceira coluna
        venceu = true;
    } else if (valoresPosicoes[0] == valoresPosicoes[4] && valoresPosicoes[4] == valoresPosicoes[8]) {  // terceira coluna
        venceu = true;
    } else if (valoresPosicoes[2] == valoresPosicoes[4] && valoresPosicoes[4] == valoresPosicoes[6]) {  // terceira coluna
        venceu = true;
    }

    if (venceu) {
        // atrasado para dar tempo de aparecer o ultimo X ou O colocado
        setTimeout(() => {
            alert("Jogador "+ jogador +" venceu!");
            for (let i = 0; i < todasPosicoes.length; i++) {
                document.getElementById(todasPosicoes[i]).innerText = "";
                posicoesPermitidas = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9"];  //  reinicia a lista
            }
        }, 5);
        rodada = 0;
        venceu = false;
        return;
    }
    
    // verifica se deu velha
    if (posicoesPermitidas.length == 0) {
        setTimeout(() => {
            alert("Deu velha");
            for (let i = 0; i < todasPosicoes.length; i++) {
                document.getElementById(todasPosicoes[i]).innerText = "";
                posicoesPermitidas = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9"];  //  reinicia a lista
            }
        }, 5);
        rodada = 0;
        return;
    }
    valoresPosicoes = [];   //  zera o array
}