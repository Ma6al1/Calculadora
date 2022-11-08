const txtop1 = document.getElementById("op1")
const txtoperacion = document.getElementById("operacion")
const txtop2 = document.getElementById("op2")
const btncalculadora = document.getElementById("calcular")
const pResultado  = document.getElementById("resultado")

btncalculadora.addEventListener('click', calcular)

function calcular(){
    const operacion = txtoperacion.value
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/")  && !isNaN(op1) && !isNaN(op2)) {
        let resultado;
        switch(operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }
        pResultado.style = "color:White"
        pResultado.innerText = "= " + resultado 
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "Calculo imposible"
    }
}