//Promise.all() ->
/*
Espera todas as promises serem resolvidas ou alguma ser rejeitada.

Se a promessa for resolvida, A promise retornada é resolvida com um array contendo todos os valores dos iteráveis passados como argumento (como valores que não são promises).

Se qualquer uma das promises passadas for rejeitada, Promise.all assíncronamente é rejeitada com o valor da promise rejeitada, independentemente se outras promises foram resolvidas.
*/

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
//Usando promise.all
const promises = [
    'Primeiro valor', 
    teste('Promise 1', random(1, 3)),
    teste('Promise 2', random(1, 3)),
    teste('Promise 3', random(1, 3)),
    teste('Promise 4', random(1, 3)),
    'Outro valor'
];

Promise.all(promises).then(valores => {

    console.log(valores);

}).catch(erro => {

    console.log(erro);
});
