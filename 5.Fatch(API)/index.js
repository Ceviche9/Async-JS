//A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() (en-US) que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

document.addEventListener('click', e => {

    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){

        e.preventDefault();
        carregaPag(el);

    }

});

async function carregaPag(el){

    try{
    const href = el.getAttribute('href');
    //O fetch se comporta como uma promise->
    const resposta = await fetch(href);
    //                          Esse erro vai direto pro catch()
    if(resposta.status !== 200) throw new Erro('Erro inesperado');
    const html = await resposta.text();
    loadResult(html);
    } catch(e) {

        alert(e);
    }
    
}

function loadResult(response){

    const result = document.querySelector('.resultado');

    result.innerHTML = response;

}
