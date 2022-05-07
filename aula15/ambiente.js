let num = [5 , 8 , 9 , 3]
    num.push(1)
    console.log(`Nosso vetor ${num}`) 
    console.log(`Nosso vetor tem ${num.length} posições`)
    console.log(`Nosso vetor em ordem crescente ${num.sort()} `)
// a posição é sempre o menor número por causa do .sort() que altomaticamente bota os vetores em ordem crescente, caso eu tive esse comando o primeiro valor passa a ser 5. Lembrando que a ordem altera os resultado em javaScript.
    console.log(`O primeiro valor do vetor é ${num[0]} posições`) 
    
//o indexOf() é usado para usar valores dentro das arrays
    let pos = num.indexOf(8) 
//toda vez que o programa em javasript buscar um valor e esse valor não for encontrado o programa vai retornar o valor -1.
    if (pos == -1) { 
        console.log(`O valor não foi encontrado`)
    } else {
        console.log(`O valor 8 está na posição ${pos}`)
    }
    