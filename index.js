var leonardo = window.document.getElementById("card-leonardo")
var bruna = window.document.getElementById("card-bruna")
var samantha = window.document.getElementById("card-samantha")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style="display:none"
    bruna.style="display:flex"
    setaDireita.style="display:none"
    setaEsquerda.style="display:flex"
}

function RolarParaEsquerda() {
    leonardo.style="display:flex"
    bruna.style="display:none"
    setaDireita.style="display:flex"
    setaEsquerda.style="display:none"
}