//Promise.Resolve() ->

function random(min, max){

    min *= 1000
    max *= 1000
    const rand = Math.random() * (max - min) + min
    return Math.floor(rand)
}
function teste(msg, segundos){

   if(typeof msg !== 'string') {
    reject('Bad value');
    return;
   }
   
    return new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(msg.toUpperCase() + '-Passei na promise');
    }, segundos);

    
   });
    
}

function baixaPagina() {

    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em Cache')
    }else{
        return teste('Baixei a página', 3000);
    }

}

baixaPagina()
    .then(dados => {
        console.log(dados);
    })
    .catch(e => console.log(e));