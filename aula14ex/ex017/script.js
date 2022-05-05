function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    let opm = document.getElementById('m')
    let opa = document.getElementById('a')
    let ops= document.getElementById('s')
    let opd = document.getElementById('d')
    
    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, verificar os dados!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        
        while (c <=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    }
    
}