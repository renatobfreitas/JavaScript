//o parametro n1 recebeu uma condição interna para validar uma possivel soma, no caso abaixo a soma foi 7 + indefinido que por causa da condição (n1 = 0) ficou 0.
function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(`o valor da soma  é ${soma(7)}`)

console.log(`Agora a soma deu ${soma(7,3)}`)


