
//um object parece e funcionar como um array, no entanto é possivel armazenar diversos tipos de dados na memoria de uma variável, no caso aqui = let amigo = { object }
let amigo = { 
    nome:'José',
    sexo:'M' ,
    peso:85.4 ,
    engordar(p=0) {   
    this.peso += p
}
}  // fechamento do object

const a = amigo.engordar()
let pa = amigo.peso


amigo.engordar(2)
let dif = amigo.peso - pa

console.log(`${amigo.nome} pesava ${pa} e agora ele pesa ${amigo.peso} Kg`)
if (amigo.peso > 85.4) {
    console.log(`Ele engorou ${dif}`)
} if (amigo.peso < 85.4) {
    console.log(`Ele emagreceu ${dif}`)
}

    