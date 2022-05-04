function contar() {
    let inicio = document.getElementById('icont')
    let fim = document.getElementById('fcont')
    let passo = document.getElementById('pass')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!'
        window.alert('[ERRO] Por favor, verificar os dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passe zerado, considar PASSE 1')
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
        res.innerHTML += ` \u{1F3C1}`
    }

}