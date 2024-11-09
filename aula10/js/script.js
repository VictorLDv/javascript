// function horario(){
//     //vamos fazer a instância da classe Date
//     //onde iremos encontrar as funções
//     //de data e hora.
//     let tempo = new Date()
//     let hora = tempo.getHours()
//     let minuto = tempo.getMinutes()
//     let segundo = tempo.getSeconds()
//     document.querySelector("#relogio").innerHTML=`${hora} : ${minuto} : ${segundo}`;
// }
// let p = 0
// function movimentaDiv(){

//     if(p >=900){
//         p= 900
//     }
//     else{
//         p +=10
//     } 

//     document.querySelector("#imagem").style.left = p +"px"
  
// }

// window.setInterval(movimentaDiv, 100)

function apagarSombra(){
    // document.querySelector("#sombra").style.width = "0vw"
    document.querySelector("#sombra").style.opacity = "0"
}
window.setInterval(apagarSombra, 5000)

// biblioteca jquery