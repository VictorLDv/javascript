let nome = document.getElementById("txtnome");

let email = document.getElementById("txtemail");

let telefone = document.getElementById("txttelefone");

let idade = document.getElementById("txtidade");

let dados = []
let cadastro = () =>{
let cliente = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    idade: idade.value
}
dados.push(cliente)
listaClientes()
    console.log(dados)
}
let listaClientes = ()=>{

    let lista = document.getElementById("lista")
    lista.innerHTML=`
    <p class = cabecalho>
        <span>Nome</span>
        <span>E-mail</span>
        <span>telefone</span>
        <span>idade</span>
        </p>
    
    `
let saida="";
    dados.map((cli, ix) =>{
        
        saida += `
        <p class= info >
            <span>${cli.nome}</span>
            <span>${cli.email}</span>
            <span>${cli.telefone}</span>
            <span>${cli.idade}</span>
            </p>
        
        `
    })
  lista.innerHTML += saida
}



