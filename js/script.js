var passador = document.querySelector('.passador')
var qntd = document.querySelectorAll('.slides .imagens')
var atual = 0
var imagem = document.getElementById('atual')
var rolar = true

for(let i = 0; i < qntd.length; i++){
    var div = document.createElement('div')
    div.id = i
    passador.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var posicao = document.querySelectorAll('.passador div')

for(let i = 0; i< posicao.length; i++){
    posicao[i].addEventListener('click', ()=>{
        atual = posicao[i].id
        rolar = false
        slide()
    })
}

function slide(){
    if(atual >= qntd.length){
        atual = 0
    }
    else if(atual < 0){
        atual = qntd.length-1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -1024*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar = true
    }
},4000)



document.getElementById('passar').onclick = function(){
    const widhtItemCard = document.querySelector('.itemCard').offsetWidth;
    document.getElementById('card').scrollLeft += widhtItemCard * 2;
}
document.getElementById('voltar').onclick = function(){
    const widhtItemCard = document.querySelector('.itemCard').offsetWidth;
    document.getElementById('card').scrollLeft -= widhtItemCard * 2;
}

