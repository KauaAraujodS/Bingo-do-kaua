var jogadores = []
function gerarNumerosAleatorios(quantidade, min, max){
    if(quantidade > (max - min)){
        console.log("Intervalo insuficiente ...");
        return;
    }
    var numeros = [];
    while(numeros.length < quantidade){
        var aleatorio = Math.floor(Math.random()*(max - min) + min);
        if(!numeros.includes(aleatorio)){
            numeros.push(aleatorio);
        }
    }
    return numeros;
}
function gerarTabela(){
    var nomeJogador = prompt('Digite o nome do jogador');
    var cartela = [gerarNumerosAleatorios(5,1,15), gerarNumerosAleatorios(5,16,30), gerarNumerosAleatorios(5,31,45),gerarNumerosAleatorios(5,46,60), gerarNumerosAleatorios(5,61,75)];

    jogadores.push({
        nomeJogador: nomeJogador,
        cartela: cartela
    });
    desenharCartela(nomeJogador, cartela);
    console.log(jogadores);
}
function reiniciarJogo(){
    jogadores = [];
    document.getElementById('espaco_cartelas').innerHTML = '';
}
function desenharCartela(nome, cartela){
    var div = document.getElementById('espaco_cartelas');
    var tabela = document.createElement('table');
    var thead = document.createElement('thead');
    var thB = document.createElement('th');
    thB.innerText = 'B';
    var thI = document.createElement('th');
    thI.innerText = 'I';
    var thN = document.createElement('th');
    thN.innerText = 'N';
    var thG = document.createElement('th');
    thG.innerText = 'G';
    var thO = document.createElement('th');
    thO.innerText = 'O';
    thead.appendChild(thB);
    thead.appendChild(thI);
    thead.appendChild(thN);
    thead.appendChild(thG);
    thead.appendChild(thO);
    tabela.appendChild(thead);

    for(var i = 0; i < 5; i++){
        var tr = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            var td = document.createElement('td');
            if(i == 2 && j == 2){
                td.innerText = "x";
            } else {
                td.innerText = cartela[j][i];
            }
            tr.appendChild(td);
        }
        tabela.appendChild(tr);
    }
    div.appendChild(tabela);
}