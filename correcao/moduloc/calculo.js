/************************************************************************
* Objetivo: Arquivo responsável pelo processamento de cálculos matemáticos 
* (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIRIR)
* Data: 20/02/2026
* Autor: João
* Versão: 1.0
**************************************************************************/

//toLowerCase() -> Retorna uma String em minúsculo
//toUpperCase() -> Retorna uma String em MAIÚSCULO

const validarDados = function(numero1, numero2, operador){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let tipoCalculo = String(operador)

    if(numero1 == '' || isNaN(numero1) || numero2 == '' || isNaN(numero2) )
}

//*Exemplo de função anônima

//*Função para calcular as 4 operações matemáticas
const calcular = function(numero1,numero2,operador){
    let valor1             = Number(numero1)
    let valor2             = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()

    let resultado

    /*if(operadorMatematico == 'SOMAR'){
        resultado = valor1 + valor2
    }else if(operadorMatematico == 'SUBTRAIR'){
        resultado = valor1 - valor2
    }else if(operadorMatematico == 'MULTIPLICAR'){
        resultado = valor1 * valor2
    }else if(operadorMatematico == 'DIVIDIR'){
     if(valor2 != 0)
        resultado = valor1 / valor2
    }


    //Saida
    if(resultado != undefined){
        return resultado
    }else{
        return false
    }*/

}

switch (operadorMatematico){
    case "SOMAR":
        resultado = somar(valor1, valor2)
        break;

    case "SUBTRAIR":
        resultado = subtrair (valor1, valor2)
        break;

    case "MULTIPLICAR":
        resultado = multiplicar (valor1, valor2)
        break;

    case "DIVIDIR":
        resultado = dividir (valor1, valor2)
        break
        default:
            break
}

//função baseada em formato de seta ( arrow function)
const somar       = (numero1,numero2) => Number(numero1) + Number(numero2)
const subtrair    = (numero1,numero2) => Number(numero1) - Number(numero2)
const multiplicar = (numero1,numero2) => Number(numero1) * Number(numero2)
const dividir     = (numero1,numero2) => Number(numero1) / Number(numero2)

MediaSourceHandle.exports = {
    calcular,
    somar,
    multiplicar,
    dividir 
}
