/*
*   Objetivo: Desenvolver aplicação para a empresa de Cálculos SA
*   Autor: João Pedro
*   Data: 13/02/2026
*   Versão: 1.0
 */

const readline = require('readline')
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Dois números de entrada de dados
entradaDeDados.question('Digite um número: ', function (valor1) {
    let n1 = valor1

    //Entrada do segundo número
    entradaDeDados.question('Digite um segundo número: ', function (valor2) {
        let n2 = valor2

        entradaDeDados.question('Qual operação matemática deseja realizar \nAdição \nSubtração \nMultiplicação \nDivisão \n', function (operacao) {
            let operacaoReal = operacao


            let Calculos = require('./modulo/calculo')
            //Chama a função de validar dados
            //Se ela retornar verdadeiro, então continua o processo para realizar o cálculo
            let validação = Calculos.validação

            
            if (validação == true) {
                let resultados = Calculos.Calcular(n1, n2, operacao)
                console.log('O resultado da operação é: ' + resultados)


            } 

        })
    })
})

