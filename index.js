const buttonOn = document.querySelector('.button-on')
const buttonOff = document.getElementById('button-off')
const lampada = document.querySelector('img')

function on(){
    lampada.src = './img/ligada.jpg'
}

function off(){
    lampada.src = './img/desligada.jpg'
}

function toBreak(){
    lampada.src = './img/quebrada.jpg'
}

buttonOn.addEventListener('click', on)
buttonOff.addEventListener('click',off)
toBreak.addEventListener('click', lampada)