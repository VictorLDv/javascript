function carregarFilmes(){

let lista=document.getElementById("lista")






fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br&api_key=e8ee1b7136ab091a2fb872089bf3c840")
    .then((resposta)=>resposta.json())
    .then((dados)=> {
    console.log(dados.results)
    dados.results.map((f)=>{
        // vamos criar um elemento do tipo
        //  DIV para cada filme mapeado


      let div_fm= document.createElement("div")
        //adicionar um atributo do tipo class
        // para formatar
        div_fm.setAttribute("class","filme") 
        // criar um elemento 
        // do tipo img para capa do filme

        let img_capa=document.createElement("img")
        img_capa.src = `https://image.tmdb.org/t/p/w500${f.poster_path}`
        
        // criar o elemento 
        // do tipo p para media de votos

        let p_votos = document.createElement("P")
        p_votos.setAttribute("class","votos")
        p_votos.innerHTML=f.vote_average

        let h2_titulo = document.createElement("h2")
        h2_titulo.innerHTML =f.title

        let p_lancamento = document.createElement("p")
        p_lancamento.setAttribute("class","lancamento")
        p_lancamento.innerHTML = f.release_date

        
        // adicionar a imagem na div usando 
        // o comando appendChild
        div_fm.appendChild(img_capa)
        div_fm.appendChild(p_votos)
        div_fm.appendChild(h2_titulo)
        div_fm.appendChild(p_lancamento)

        // adicionar a div na lista
        lista.appendChild(div_fm)
       })
    })
    .catch((e)=>console.error(e))
}