  // Quando dermos o "play", os segundos tem que 
  // ficar mudando e após 60'', o minuto decresce de 1


export function Timer({
  minutesCounter,
  secondsCounter,
  timerTimeOut,
  resetControls
}) {


  function resetTimer(){
    clearTimeout(timerTimeOut);
    updateTimerDisplay(minutes, 0);
  }
  
  function updateTimerDisplay(minutes,seconds){
    minutesCounter.textContent = String(minutes).padStart(2,"0");
    secondsCounter.textContent = String(seconds).padStart(2,"0");
  }
  
  function countDown(){
    timerTimeOut = setTimeout(function(){
      let seconds = Number(secondsCounter.textContent);
      let minutes = Number(minutesCounter.textContent)
  
      updateTimerDisplay(minutes, 0)
  
  
      if (minutes <= 0){
        resetControls();
        return
      }
      /*Quando o conteúdo do secondsCounter for 00, ele tem que voltar a 60 segundos*/
      if ( seconds <= 0){
        seconds = 60;
  
        // QUANDO OS SEGUNDOS CHEGAREM EM 00, ALÉM DE VOLTAREM PARA 60, TEM QUE DIMINUIR DE 1 OS MINUTOS
        --minutes;
      }
      
          updateTimerDisplay(minutes, String(seconds-1))
       
      /* Essa função irá pegar o conteúdo do secondsCounter, pegar o mesmo secondsCounter
      .textContent - que no início está 00 -, transformá-lo em um numérico  e decrementar de 1-
      ou seja, depois de 1 segundo, queremos que diminua de 1 */
  
      //QUANDO TIVERMOS SOMENTE 1 CARACTER, IREMOS QUERER QUE ELE PREENCHA COM MAIS 1 ZERO
   
      
     
  
      //Depois de 1 segundo, temos que executar novamente essa lógica, para ir diminuindo o tempo.
      // Rodando essa função 1 vez, ele reduz os segundos de 1. Para ficarmos diminuindo os segundos,
      // ao chegar no final da execução da função, ele chama a função countDown novamente.
  
      countDown(); // RECURSIVIDADE = UMA FUNÇÃO CHAMANDO ELA MESMA 
      /*Ela executa e no final, chama a mesma função novamente, executa mais uma vez e no final,
      a chama novamente. Ela vai se auto executando dessa forma até que ela encontre alguma coisa para parar. */
      
    }, 1000)
  }

  return {
    countDown,
    resetTimer
  }
  
}

 