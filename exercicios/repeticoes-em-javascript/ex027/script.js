/*
    ## IMPORTANTE ##
    Você tem todo o direito de usar esse material 
    para seu próprio aprendizado. Professores também 
    podem ter acesso a todo o conteúdo e usá-los com 
    seus alunos. Porém todos os que usarem esse 
    material - seja para qual for a finalidade - deverão 
    manter a referência ao material original, disponível 
    em https://github.com/gustavoguanabara/javascript. Este 
    material não poderá ser utilizado em nenhuma hipótese 
    para ser replicada - integral ou parcialmente - 
    por autores/editoras/instituições para criar livros 
    ou apostilas, com finalidades de obter ganho financeiro 
    com ele.
*/

function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)
    let oper = document.getElementById("foper").value
    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`
    if (oper == "/" && n == 0) {
        saida.innerHTML = "<h2>Impossível dividir por zero</h2>"
    } else {
        for (let i=1; i<=10;i++){
            var result
            if (oper == "+"){result = n + i}
            if (oper == "-"){result = n - i}
            if (oper == "*"){result = n * i}
            if (oper == "/"){result = n / i}
            saida.innerHTML += `${n} ${oper} ${i} = <strong>${result}</strong><br>`
        }
    }
}