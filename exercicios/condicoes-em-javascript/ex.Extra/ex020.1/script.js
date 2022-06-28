
function carregar() {
    var msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date() //data completa atual
    const hora = data.getHours() //apenas a hora atual
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        img.src = "img/manha.png"
        document.body.style.background = "#f4d9bb"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "img/tarde.png"
        document.body.style.background = "#a99d8a"
    } else {
        img.src = "img/noite.png"
        document.body.style.background = "#466369"
    }
}