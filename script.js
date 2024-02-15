/* Desenvolva seu código abaixo */

function playRockPaperScissor(player1, player2){

    const partida = player1 && player2

    if ((partida === "Pedra","Tesoura")||(partida === "Papel","Pedra")||(partida === "Tesoura","Papel")){
        return "Jogador 1 venceu!"
    }

     else if ((partida === "Pedra","Pedra")||(partida === "Tesoura","Tesoura")||(partida === "Papel","Papel")){
        return "Empate!"
    }

     else if ((partida === "Tesoura","Pedra")||(partida === "Pedra","Papel")||(partida === "Papel","Tesoura")){
        return "Jogador 2 venceu!"
    }
}
