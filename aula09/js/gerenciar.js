// fazer referência aos controles do formulário
const nome = document.getElementById("txtnome")
const email = document.getElementById("txtemail")
const telefone = document.getElementById("txttelefone")
const endereco = document.getElementById("txtendereco")
const idade = document.getElementById("txtidade")

let idcli= 0
// fazer referência ao botão salvar

const brtnsalvar = document.getElementById("Salvar")

const btnatualizar = document.getElementById("btnatualizar")

//referência do botão cadadstrar cliente
const btncadastrar = document.getElementById("btncadastrar")
// quando clicar no botão cadastrar cliente o botão atualizar do modal deve desaparecer.
//vamos aplicar um estilo css de display none.

btncadastrar.onclick = ()=>{
  btnatualizar.style.display = "none"
  brtnsalvar.style.display = "block"
}

brtnsalvar.onclick = ()=>{
    /*
    para realizar o cadatro de um novo cliente, iremos 
    usar o comando fetch(buscar)para localizar uma
    url com o endpoint cadastrar. Passar como parâmetro
    o método post e dados do formulário para a api de cadastro do cliente
    */
   fetch("http://10.26.49.20:3000/cadastrar",
  {
    method:"POST",
    headers:{
        "accept":"application/json",
        "content-type":"application/json"
  },
  body:JSON.stringify({
    nome:nome.value,
    email:email.value,
    endereco:endereco.value,
    telefone:telefone.value,
    idade:idade.value 
  } )

})
.then((resposta)=>resposta.json())
.then((rs)=>alert(rs.msg))
.catch((error) =>console.error(`Erro na api->${error}`))

window.location.reload()
}

const lista= document.getElementById("lista")
// quando o documento carregar ja deve montar a lista de clientes na tela

document.body.onload = () =>{
    fetch("http://10.26.49.20:3000/listar")
    .then((resposta)=>resposta.json())
    .then((rs)=>{
        let saida=""
        rs.dados.map((cli)=>{
           saida +=`<div class="card col-3" >
           <img src="https://cdn.icon-icons.com/icons2/788/PNG/512/user-1_icon-icons.com_65106.png" class="card-img-top tamanho" alt="...">
           <div class="card-body">
             <h5 class="card-title">${cli.nome}</h5>
             <p class="card-text"></p>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">E-Mail: ${cli.email}</li>
             <li class="list-group-item"Telefone: ${cli.telefone}</li>
             <li class="list-group-item">End: ${cli.endereco}</li>
             <li class="list-group-item">Idade: ${cli.idade}</li>
           </ul>
           <div class="card-body">
             <a href="#" class="btn btn-danger" onclick=apagar(${cli.idcliente})>Excluir</a>
             <a href="#" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="atualizar(${cli.idcliente},'${cli.nome}','${cli.endereco}','${cli.email}','${cli.telefone}',${cli.idade})">Atualizar</a>
           </div>
         </div>`
        })
        lista.innerHTML = saida
    })
    .catch((error)=>console.error(`erro na api -> ${error}`))
}

function apagar(id){

  if(confirm("Você realmente deseja apagar?") == 1){
    return alert("apagou")
  }
  else{
    return alert("Não apagou")
  }



  fetch(`http://10.26.49.20:3000/apagar/${id}`,{
    method:"DELETE",
    headers:{
      "accept":"application/json",
      "content-type":"application/json"
    }
  })
  .then((resposta)=>resposta.json())
  .then((rs)=>{
    if(rs.msg=="Apagou"){
      alert(`O cliente de id: ${id} foi apagado com sucesso`)
       //Fazer um reload na pag para atualizar os dados
       window.location.reload()
    }
   else{
    alert(`Não foi possivel apagar o cliente de id: ${id}\n
    veja o erro abaixo:\n${rs.msg}`)
   }
    
  })
  .catch((error)=>console.error(`Erro ao carregar a api ${error}`))
}

function atualizar(id,no, en, em,te,ida){

  brtnsalvar.style.display = "none"
  btnatualizar.style.display = "block"


console.log(`${id}\n${no}\n${en}\n${em}\n${ida}\n${te}`)
nome.value = no
email.value = em
telefone.value = te
endereco.value = en
idade.value = ida
idcli = id
}

//vamos aplicar a função de atualizar os dados do formulario
//ao botão atualizar do modal

btnatualizar.onclick = ()=>{

  function atualizar(id){}

    if(confirm("Você realmente deseja atualizar?") == 1){

      fetch(`http://10.26.49.20:3000/Atualizar/${id}`,{
    method:"DELETE",
    headers:{
      "accept":"application/json",
      "content-type":"application/json"
    }
  })
  .then((resposta)=>resposta.json())
  .then((rs)=>{
    if(rs.msg=="Atualizado"){
      alert(`O cliente de id: ${id} foi atualizado com sucesso`)
       //Fazer um reload na pag para atualizar os dados
       window.location.reload()
    }
   else{
    alert(`Não foi possivel atualizar o cliente de id: ${id}\n
    veja o erro abaixo:\n${rs.msg}`)
   }
    
  })
  .catch((error)=>console.error(`Erro ao carregar a api ${error}`))

    }

  fetch(`http://10.26.49.20:3000/Atualizar/${id}`,{
    method:"DELETE",
    headers:{
      "accept":"application/json",
      "content-type":"application/json"
    }
  })
  .then((resposta)=>resposta.json())
  .then((rs)=>{
    if(rs.msg=="Apagou"){
      alert(`O cliente de id: ${id} foi atualizado com sucesso`)
       //Fazer um reload na pag para atualizar os dados
       window.location.reload()
    }
   else{
    alert(`Não foi possivel atualizar o cliente de id: ${id}\n
    veja o erro abaixo:\n${rs.msg}`)
   }
    
  })
  .catch((error)=>console.error(`Erro ao carregar a api ${error}`))
 fetch(`http://10.26.49.20:3000/atualizar/${idcli}`,{
  method:"PUT",
  headers:{
    "accept":"application/json",
    "content-type":"application/json"
 },
  
body:JSON.stringify({
nome:nome.value,
email:email.value,
telefone:telefone.value,
endereco:endereco.value,
idade:idade.value
  })
})
.then((resposta)=>resposta.json())
.then((rs)=>{
  if(rs.msg=="Atualizado"){
    alert(`o cliente ${nome.value}foi atualizado com sucesso!`)
    window.location.reload()
  }
  else{
    alert(`Não foi possivel atualizar o cliente ${nome.value} \n veja o que aconteceu: \n${rs.msg}`)
  }
})
.catch((er)=>console.error(`Erro ao carregar a api ${er}`))



}