var agora = new Date()
var diaSem = agora.getDay()

/*
No javScript os dias da semana são contados de 0 a 6 sendo assim:

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado

    Trabalhando uma Condicional multipla Com switch
*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break // não esquecer de usar o break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: //lembrar de usar o default para finalizar, não é obrigatório para todas as situações, mas é sempre bom para caso aja algum erro no sistema.
        console.log('{ERRO} Dia inválido')
        break
}
