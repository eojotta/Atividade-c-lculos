/************************************************************************
* Objetivo: Arquivo responsável SOMENTE pelas entradas e saídas de dados
* Data: 20/02/2026
* Autor: João
* Versão: 1.0
**************************************************************************/
//Import da biblioteca de calculos
const calculosMatematicos = require('./moduloc/calculo.js')

let n1 =

let n2 = 

let operador = 

let validar = calculosMatematicos.validarDados(n1,n2,operador)

if(validar){
    let resultado = calculos calculosMatematicos.calcular(n1,n2, operador)

    if(resultado)
        console.log(resultado)
    else
    console.log('erro: nao foi possivel fazer o calculo')

}else{
    console.log('erro: validação de dados incorreta')
}