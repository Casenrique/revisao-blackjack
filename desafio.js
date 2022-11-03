console.clear()

    const isActiveGame = confirm("Quer iniciar uma nova rodada?")

    if (isActiveGame) {
      console.log("Boas vindas ao jogo Blackjack!")
  
      //ENQUANTO AS DUAS CARTAS FOREM IGUAIS A ASES, SORTEIE NOVAMENTE

      function sortCards() {

         let firstCard = comprarCarta()
         let secondCard = comprarCarta()

         while (
            firstCard.texto.includes("A")
            && secondCard.texto.includes("A")
         ) {
            firstCard = comprarCarta()
            secondCard = comprarCarta()
         }

         return [firstCard, secondCard]
      }

      const playerCards = sortCards()

      const playerTotal = playerCards[0].valor + playerCards[1].valor

      const computerCards = sortCards()
        
      const computerTotal = computerCards[0].valor + computerCards[1].valor

      console.log(`Jogador: cartas - ${playerCards[0].texto} ${playerCards[1].texto} pontuação: ${playerTotal}`)
      console.log(`Computador: cartas - ${computerCards[0].texto} ${computerCards[1].texto} pontuação: ${computerTotal}`)

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