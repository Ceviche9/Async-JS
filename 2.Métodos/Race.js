//Entrega o primeiro valor que foi resolvido ou o erro.

function random(min, max){

    min *= 1000
    max *= 1000
    const rand = Math.random() * (max - min) + min
    return Math.floor(rand)
}
function teste(msg, segundos){

   if(typeof msg !== 'string') {
    reject('Bad value');
   }
   
    return new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(msg.toUpperCase() + '-Fui a primeira');
    }, segundos);

    
   });
    
}

const promises = [
    teste('Promise 1', random(1, 3)),
    teste('Promise 2', random(1, 3)),
    teste('Promise 3', random(1, 3)),
    teste('Promise 4', random(1, 3)),
];

Promise.race(promises).then(valores => {

    console.log(valores);

}).catch(erro => {

    console.log(erro);
});
