
let userName = getFirstName("Adriano-loko", "-")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
	let firstName = name.split(splitChar)[0]
    return firstName
}

let resultado = pontos(70, 55)

console.log("O Resultado dessa partida foi " + resultado)


function pontos(numA, numB){
    return numA - numB
}

let nickname = "Adriano-loko"

function calculaPontos() {
    if (resultado <= 10) {
        return "Ferro"
    } else if ( resultado  <= 20) {
        return "bronze"
    } else if ( resultado  >= 21 && resultado  <= 50) {
        return "prata"
    } else if ( resultado  < 70) {
        return "ouro"
    } else if ( resultado  < 80) {
        return "diamante"
    } else if ( resultado  < 90) {
        return "lendario"
    } else if ( resultado  < 101) {
        return "imortal"
    } 

}

console.log(`O Herói ${nickname} tem saldo de ${resultado} vitórias e está no nível ${calculaPontos()}.`)
