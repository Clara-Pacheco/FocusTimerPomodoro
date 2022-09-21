// default import
import resetControls from "./controls"; // o ./ é necessário para dizer que estamos na pasta atual

// named import
import { Timer } from "./timer.js"




const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let timerTimeOut
let minutesCounter = document.querySelector('.minutes');
let secondsCounter = document.querySelector('.seconds');
let minutes = Number(minutesCounter.textContent);

// Executamos a função Timer e injetamos dependências nela -  tudo que a função Timer precisar para
// ser executada corretamente, iremos injetar - passar como parâmetros - por aqui. E receberemos como
// retorno da função Timer um objeto, que será atribuído a constante timer e que poderá ser usado no
// resto do código agora, onde ele for necessário.

const timer = Timer({
  minutesCounter,
  secondsCounter,
  timerTimeOut,
  resetControls,
})

buttonPlay.addEventListener('click', function(){
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  // Quando dermos o play, ele chamará a função que irá alterar os segundos

  timer.countDown();

})

buttonPause.addEventListener('click', function(){
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  clearTimeout(timerTimeOut);
})


buttonStop.addEventListener('click', function(){
resetControls();
timer.resetTimer();


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
//  minutes = prompt('Quantos minutos?') || 0;
//  updateTimerDisplay(minutes,0 );

 let newMinutes = prompt('Quantos minutos?');
 if(!newMinutes){
  timer.resetTimer();
  return
 }else{
  minutes = newMinutes
  updateTimerDisplay(minutes, 0);
 }

})