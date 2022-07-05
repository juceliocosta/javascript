let lua = {
    nome: "Lua",
    massa: "7,35.1022 kg",
    distancia: "384 400 km",
    gravidade: "1,62 m/s2",
    temperatura: "127 ºC",
    faces: ["🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔"],
    faceAtual: 0,
    getInfo() {
        let view = document.querySelector("#view")
        let lua = `<div id="lua" title="clique em mim" onclick="lua.rotacionar()">${this.faces[this.faceAtual]}</div>`
        let info = `<h1>${this.nome}</h1>
        <p><strong>Massa:</strong> ${this.massa}</p>
        <p><strong>Distância:</strong> ${this.distancia}</p>
        <p><strong>Gravidade:</strong> ${this.gravidade}</p>
        <p><strong>Temperatura:</strong> ${this.temperatura}</p>`
        view.innerHTML = `${lua}${info}`
        
    },
    rotacionar() {
        if (this.faceAtual == this.faces.length-1) {
            this.faceAtual = 0
        } else {
            this.faceAtual++
        }
        this.getInfo()
    }
}

document.addEventListener('load', lua.getInfo())


