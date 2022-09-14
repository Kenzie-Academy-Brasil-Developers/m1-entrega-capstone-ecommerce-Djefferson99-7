let listaUl = document.querySelector(".produtoTopico")
let listaCar = document.querySelector(".conteinerCarrinho")
let resutado = document.querySelector(".resutado")

function lendoArr(arr,referenciaHTML) {
    for(let i = 0; i < arr.length; i++){
        let figure = arr[i]
        let templete = criarTemplte(figure)
        referenciaHTML.appendChild(templete)
    }
}
function criarCarrinho(arr,referenciaHTML){
    let templete = criarTemplteCar(arr)
    referenciaHTML.appendChild(templete)
}

lendoArr(data,listaUl)

let contador = 0
function criarTemplte(data){
    let categoria = data.categoria
    let nome = data.nome
    let descricao = data.descricao
    let preco = data.preco
    let image = data.image

    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagH2 = document.createElement("h2")
    let tagH3 = document.createElement("h3")
    let tagDescricao = document.createElement("p")
    let tagValor = document.createElement("p")
    let tagAdd = document.createElement("a")

    tagAdd.id = data.nome
    tagLi.classList.add("produto")
    tagImg.classList.add("imgLista")
    tagH2.classList.add("categoria")
    tagH3.classList.add("title")
    tagDescricao.classList.add("descricao")
    tagValor.classList.add("valor")
    tagAdd.classList.add("addCarrinho")

    tagImg.src = image
    tagImg.alt = descricao
    tagH2.innerText = categoria
    tagH3.innerText = nome
    tagDescricao.innerText = descricao
    tagValor.innerHTML = `R$ ${preco}`
    tagAdd.innerHTML= `Adicionar no carrinho`

    tagLi.append(tagImg, tagH2, tagH3, tagDescricao, tagValor, tagAdd)

    return tagLi
}

listaUl.addEventListener("click",function(event){
    event.preventDefault()
    contador = contador + 1
    let botao = event.target 
   if(botao.tagName == "A"){
    console.log(botao.id)
    for(let i = 0; i< data.length; i++){
        if(botao.id == data[i].nome){
            listaCarrinho.push(data[i])
            carrinho(listaCarrinho)
            final(listaCarrinho.length)
        }
    }
   }  
})
console.log(contador)
function carrinho(arr){
   listaCar.innerHTML = ""
   if(listaCarrinho.length == 0){
    
    let tagCarrinhoVazio = document.createElement("p")
   
    tagCarrinhoVazio.classList.add("carrinhoVazio")


    tagCarrinhoVazio.innerHTML =`<strong>Carrinho Vázio</strong>Adicione Itens`

    listaCar.append(tagCarrinhoVazio)
    
   }
   for(let i = 0; i < arr.length; i++){
    let templete = criarTemplteCar(arr[i], i)
    listaCar.append(templete)
   }
}

function criarTemplteCar(data, i){
    
    let imagem = data.image
    let title = data.nome
    let preci = data.preco
    let type = data.descricao

    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagInfo = document.createElement("div")
    let tagNome = document.createElement("h3")
    let tagPreco = document.createElement("p")
    let tagRemov = document.createElement("a")

    tagLi.classList.add("produtoCarrinho")
    tagImg.classList.add("imgCarrinho")
    tagInfo.classList.add("infoCarrinho")
    tagNome.classList.add("titleCarrinho")
    tagPreco.classList.add("valorCarrinho")
    tagRemov.classList.add("remover")
    tagRemov.id = i 

    tagImg.src = imagem
    tagImg.alt = type
    tagNome.innerText = title
    tagPreco.innerHTML = `R$ ${preci}`
    tagRemov.innerHTML = `<a class="remover" href="">Remover do carrinho</a>`

    tagInfo.append(tagNome, tagPreco, tagRemov)
    tagLi.append(tagImg, tagInfo)

    return tagLi
         
}

 let removerCarrinho = document.querySelector(".conteinerCarrinho")   
    removerCarrinho.addEventListener("click", function(event){
        event.preventDefault()
    if(event.target.tagName == "A"){
        console.log(data)
        listaCarrinho.splice(event.target.id,1)
        carrinho(listaCarrinho)
        final(listaCarrinho.length)
        
    }
})
function somaProdutos(arrDeProdutos){
    let soma = 0
  
    for(let i = 0; i < arrDeProdutos.length; i++){
        soma += arrDeProdutos[i].preco
        console.log(arrDeProdutos[i])
    }
    return soma
}
function final(contador){
    let quantidadeTotal = document.querySelector(".valorQuatidade")
    let precoTotal = document.querySelector(".precoTotal")
    
    quantidadeTotal.innerHTML= `${contador}`
    precoTotal.innerText = `R$ ${somaProdutos(listaCarrinho)}`

    
}


//<div class="quantidade">Quantidade: <span class="valorQuatidade"></span></div>
//<div class="total">Total: <span class=" precoTotal"></span></div>



//--------------------Vazio-------------------------------------------------------------------//
//<p class="carrinhoVazio"> <strong>Carrinho Vázio</strong></p>
//<p class="addItens"> Adicione Itens</p>

//-------------------resutado-----------------------------------------------------------------//
//<div class="quantidade">Quantidade: <span>1</span></div>
//<div class="total">Total: <span>R$ 700.00</span></div>

//-------------------carrinho-----------------------------------------------------------------//
//<li class="produtoCarrinho">
//<img class="imgCarrinho" src="./img/tenisJordan1.jpg" alt="">
//<div class="infoCarrinho">
//    <h3 class="titleCarrinho">Tênis Jordan</h3>
//   <p class="valorCarrinho">R$ 700.00</p>
//    <a class="remover" href="">Remover do carrinho</a> 
//</div>
//</li>

//------------------- lista de produtos ------------------------------------------------------//
//<li class=" produto">
//<img src="./img/bolaw.webp" alt="tenis da jordan">
//<h2 class="categoria"> Tênis</h2>
//<h3 class=" title">Tênis Jordan</h3>
//<p class="descricao">d=Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//<p class="valor">R$ 700.00</p>
//<a  class="addCarrinho"href="">Adicionar no carrinho</a>
//</li>