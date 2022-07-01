function contar() {
    let inicio = document.querySelector("#inicio")
    let fim = document.querySelector("#fim")
    let passo = document.querySelector("#passo")
    let resp = document.querySelector("#resp")
    
    if (inicio.value == 0 || fim.value == 0 || String(passo.value).length == 0) {
        resp.innerHTML = "Impossivel Contar <br> Preencha todos os dados!"
    } else {
        resp.innerHTML ="Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            p = 1
            alert(`Passo inválido! considerando Passo = ${p}`)
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                resp.innerHTML += ` ${c} \u{1f449}` //emoji só funciona no tamplate string 
            }
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                resp.innerHTML += ` ${c} \u{1f449}` //emoji só funciona no tamplate string 
            }
        }
        resp.innerHTML += `\u{1f3c1}`
    }

}