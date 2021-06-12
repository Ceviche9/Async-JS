axios('pessoas.json')
    .then(dados => loadElements(dados.data));

function loadElements(json) {

    const table = document.createElement('table');

    for(let pessoa of json) {

        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = `Nome: ${pessoa.nome}`;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `Empresa: ${pessoa.empresa}`
        tr.appendChild(td);


        td = document.createElement('td');
        td.innerHTML = `Email: ${pessoa.empresa}`;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const div = document.querySelector('.resultado');
    div.appendChild(table);
    
}
