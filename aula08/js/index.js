function primeira(valor) {
    return new Promise((resolver, reject) => {
        if (valor < 50){
            resolver("deu tudo certo")
        }
        else{
            reject("deu tudo errado")
        }
        
    })
}

let usar = primeira(100);
usar
    .then((rs) =>console.log(rs))
    .catch((er) =>console.error(er))
fetch()