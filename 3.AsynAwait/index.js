function random(min , max) {

    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)

}

function teste(msg, tempo) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(typeof msg !== 'string'){
                reject(' Cai no erro')
                return;
            }
            resolve(msg + ' Passei na promise');
            return;

        }, tempo);

    });

}

//Utilizando async e await->

async function executar() {

    //O try serve para tratar um possível erro

    try {
   const fase1 = await teste('Fase 1-', random(1, 3)) 
   console.log(fase1);  
   //Possível erro
   const fase2 = await teste(404, random(1, 3))    
   console.log(fase2); 
   const fase3 = await teste('Fase 3-', random(1, 3))    
   console.log(fase3);  
    }
    catch(e) {

        console.log(e, fase2);

    }
}

executar();
