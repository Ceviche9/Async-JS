//Substituem as funções de callback
//Torna algo síncrono
function random(min, max){

    min *= 1000
    max *= 1000
    const rand = Math.random() * (max - min) + min
    return Math.floor(rand)
}

//Exemplo de código que eu quero que fique síncrono
function tempo(msg, segundos){

    //                     *1      *2
    return new Promise((resolve, reject) => {

        //***Enviado os possíveis erros para o reject
        if(typeof msg !== 'string') {
            reject('Erro inesperado')
        }

        setTimeout(() => {
            //O resolve só pode receber um parâmetro
            resolve(msg);
        }, segundos);

    });    
}

//*1 : O resolve serve para 'resolver' um código
//*2 : O reject serve para rejeitar o código como se fosse um erro.

//Quando o resolve é chamado o método then() é executado dps de resolver a promise e o catch() serve para capturar o erro do reject.

//Dentro do then() pode retornar outra promise

tempo('Conexão com o BD', random(1, 3))
    .then(resposta => {
        console.log(resposta);
        return tempo('Buscando os dados', random(1, 3));
    }).then(resposta => {
        console.log(resposta);
        //***Mandando um erro
        return tempo(404, random(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibindo os dados');
    })
    .catch(e => {
        console.log('ERRO,', e)
    });

console.log('Essa frase será exibida antes de qualquer promises');