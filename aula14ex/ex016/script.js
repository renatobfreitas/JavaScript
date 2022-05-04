function contar () {
    var inicio = window.document.getElementById('icont')
    var fim = window.document.getElementById('fcont')
    var passo = window.document.getElementById('pass')
    var res = window.document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerar PASSO 1')
            p = 1
        }
            if (i < f) { // contagem crescente
                for (let c = i; c <= f; c+= p ) {
                    res.innerHTML += ` ${c} \u{23F1} `
                }
            } else { // Contagem regressiva
                for (let c = i; c >= f; c -= p ) {
                    res.innerHTML += ` ${c} \u{23F1} `
                }         
            }
        res.innerHTML += ` \u{1F3C1} `
    } 
} 