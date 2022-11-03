/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const isActiveGame = confirm("Quer iniciar uma nova rodada?")

    if (isActiveGame) {
      console.log("Boas vindas ao jogo Blackjack!")

      const playerCard1 = comprarCarta()
      const playerCard2 = comprarCarta()

      const playerTotal = playerCard1.valor + playerCard2.valor
      
      const computerCard1 = comprarCarta()
      const computerCard2 = comprarCarta()
      
      const computerTotal = computerCard1.valor + computerCard2.valor

      console.log(`Jogador: cartas - ${playerCard1.texto} ${playerCard2.texto} pontuação: ${playerTotal}`)
      console.log(`Computador: cartas - ${computerCard1.texto} ${computerCard2.texto} pontuação: ${computerTotal}`)

      if (playerTotal > computerTotal) {
         console.log("Jogador venceu!")
      } else if (playerTotal < computerTotal) {
         console.log("Computador venceu!")         
      } else {
         console.log("Empate!")         
      }
    } else {
      console.log("O Jogo acabou.")
    }