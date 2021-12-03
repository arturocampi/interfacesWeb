// RECOGEMOS PRIMERO DEL FORMULARIO AMBOS VALORES
function comprobar() {
    let peso = document.forms['formulario']['peso'].value;
    let altura = document.forms['formulario']['altura'].value;

    // COMPROBAMOS SI EL PESO INTRODUCIDO ES CORRECTO, SI NO LO ES LO PEDIMOS DE NUEVO
    while (peso < 40 || peso > 110) {
        peso = prompt('Peso introducido incorrecto, introduce tu peso');
    }
    // COMPROBAMOS SI EL PESO INTRODUCIDO ES CORRECTO, SI NO LO ES LO PEDIMOS DE NUEVO
    while (altura < 140 || altura > 200) {
        altura = prompt('Altura introducida incorrecta, introduce tu altura');
    }

    // CALCULAMOS EL IMC DESPUÉS DE TENER AMBOS PARAMETROS CORRECTOS
    calcular(peso, altura);
}

function calcular(peso, altura) {
    // LA FUNCION RESET, PONE EL COLOR DE LOS RESULTADOS POR DEFECTO PARA MOSTRAR EL NUEVO RESULTADO
    reset();
    var num = (peso / ((altura / 100) ** 2)).toFixed(2);
    // DEPENDIENDO DEL RESULTADO INTRODUCIDO DAREMOS UN COLOR ROJO A LA LINEA ADECUADA
    switch (true) {
        case (num < 16):
            document.getElementById(1).style.color = 'red';
            break;
        case (num >= 16 && num <= 16.99):
            document.getElementById(2).style.color = 'red';
            break;
        case (num >= 17 && num <= 18.49):
            document.getElementById(3).style.color = 'red';
            break;
        case (num >= 18.5 && num <= 24.99):
            document.getElementById(4).style.color = 'red';
            break;
        case (num >= 25 && num <= 29.99):
            document.getElementById(5).style.color = 'red';
            break;
        case (num >= 30 && num <= 34.99):
            document.getElementById(6).style.color = 'red';
            break;
        case (num >= 35 && num <= 40):
            document.getElementById(7).style.color = 'red';
            break;
        case (num > 40):
            document.getElementById(8).style.color = 'red';
            break;
        default:
            alert("Error");
            break;
    }
    // IMPRIMOS EL RESULTADO POR PANTALLA
    var calculo = document.getElementById("answer");
    calculo.textContent = `Tu IMC es de: ${num}`;
}

function reset() {
    // LA FUNCION RESET, PONE EL COLOR DE LOS RESULTADOS POR DEFECTO PARA MOSTRAR EL NUEVO RESULTADO
    var list = document.getElementsByClassName('list');
    for (let i = 0; i < list.length; i++) {
        list[i].style.color = 'whitesmoke';
    }
}