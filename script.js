var watch = document.getElementById('relogio')
var horas = 00
var segundos = 00
var minutos = 00
var milesimos = 00
var intervalo


function start () {
    intervalo = setInterval(cronometro,10)
}

function pause () {
    clearInterval(intervalo)
}

function parar () {
    clearInterval(intervalo)
    minutos = 00
    segundos = 00
    horas = 00
    milesimos = 00
    watch.innerText='00:00:00:00'
}

function cronometro() {
    milesimos++
    if (milesimos==100) {
        segundos++
    milesimos=00
    }  if (segundos==60) {
        minutos++
        segundos=00
        if (minutos==60){
            horas++
            minutos = 00
        }
    }

    function correct(temp) {
        if(temp<10) {
            return ('0' + temp)
        } else {
            return (temp)
        }
    }
    watch.innerText=correct(horas) + ':' + correct(minutos) + ':' + correct(segundos) + ':' + correct(milesimos)
}