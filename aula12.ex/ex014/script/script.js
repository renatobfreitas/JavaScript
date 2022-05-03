function carregar() {
    var txt = window.document.getElementById('txt')
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#f4e0c2'
        txt.innerHTML = 'Bom dia!'
        document.getElementById('txt').style.color = 'black'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#72444e'
        txt.innerHTML = 'Boa tarde!'
    } else {
        // boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#39393b'
        txt.innerHTML = 'Boa noite!'
    }
}