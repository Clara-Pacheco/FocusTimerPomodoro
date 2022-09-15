const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let minutes 
let minutesCounter = document.querySelector('.minutes');
let secondsCounter = document.querySelector('.seconds');


  // Quando dermos o "play", os segundos tem que 
  // ficar mudando e após 60'', o minuto decresce de 1

function countDown(){
  setTimeout(function(){
    let seconds = Number(secondsCounter.textContent);
    /*Quando o conteúdo do secondsCounter for 00, ele tem que voltar a 60 segundos*/
      if ( seconds <= 0){
        seconds = 60;
      }
    /* Essa função irá pegar o conteúdo do secondsCounter, pegar o mesmo secondsCounter
    .textContent - que no início está 00 -, transformá-lo em um numérico  e decrementar de 1-
    ou seja, depois de 1 segundo, queremos que diminua de 1 */
    secondsCounter.textContent = seconds - 1;

    //Depois de 1 segundo, temos que executar novamente essa lógica, para ir diminuindo o tempo.
    // Rodando essa função 1 vez, ele reduz os segundos de 1. Para ficarmos diminuindo os segundos,
    // ao chegar no final da execução da função, ele chama a função countDown novamente.

    countDown(); // RECURSIVIDADE = UMA FUNÇÃO CHAMANDO ELA MESMA 
    /*Ela executa e no final, chama a mesma função novamente, executa mais uma vez e no final,
    a chama novamente. Ela vai se auto executando dessa forma até que ela encontre alguma coisa para parar. */
    
  }, 1000)
}


buttonPlay.addEventListener('click', function(){
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  // Quando dermos o play, ele chamará a função que irá alterar os segundos

  countDown();

})

buttonPause.addEventListener('click', function(){
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
})


buttonStop.addEventListener('click', function(){
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.remove('hide');
  buttonStop.classList.add('hide');

})

buttonSoundOn.addEventListener('click', function(){
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');

})

buttonSoundOff.addEventListener('click', function(){
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');

})

// Quando clicarmos no botão "set", uma janela irá abrir perguntando quantos minutos o 
// usuário quer setar no contador - isso será guardado na variável "minutes";
// Iremos pegar o elemento dos minutos no HTML e , através da propriedade textContent, iremos 
// alterar o seu valor com o valor digitado pelo usuário e guardado na variável "minutes"

buttonSet.addEventListener('click', function(){
 minutes = prompt('Quantos minutos?');
 minutesCounter.textContent = minutes;

})