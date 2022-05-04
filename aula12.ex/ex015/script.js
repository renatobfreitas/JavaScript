//coloquei uma cor pra cada foto igual no execicio anterior ficou lindo 
function verificar() { // função
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }  else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //tag para criar elementos
        img.setAttribute('id','foto') //

        if (fsex[0].checked) { //o fsex[0] está puxando a posição do radio ('sexo')
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                //criança
                    img.setAttribute('src', 'img/m-menino.png')
            } else if (idade < 25) {
                    //jovem
                    img.setAttribute('src','img/m-jovem.png')
            } else if ( idade < 50) {
                //adulto
                    img.setAttribute('src','img/m-adulto.png')
            } else {
                //idoso
                    img.setAttribute('src','img/m-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                //criança
                    img.setAttribute('src', 'img/f-menina.png')
            } else if (idade < 25) {
                    //jovem
                    img.setAttribute('src','img/f-jovem.png')
            } else if ( idade < 50) {
                //adulto
                    img.setAttribute('src','img/f-adulta.png')
            } else {
                //idoso
                    img.setAttribute('src','img/f-idosa.png')
            }
        }
        res.style.textAlign = 'center' // é possivel alinhar objetos pelo javascript
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // comando para adcionar elementos
    }
      
}