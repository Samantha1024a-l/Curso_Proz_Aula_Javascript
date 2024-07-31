// Captura os elementos do DOM
let titulo = document.getElementById('titulo');
let listaNaoOrdenada = document.querySelector('ul');
let link = document.querySelector('a');
let listaOrdenada = document.getElementById('lista-ordenada');

//conteúdo textual aos elementos 'h1' e 'a'
titulo.innerText = 'Título da Página';
link.innerText = 'Visite o Site da Proz';

// lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// lista com links
listaOrdenada.innerHTML = `
    <li><a href="https://site1.com">Site 1</a></li>
    <li><a href="https://site2.com">Site 2</a></li>
    <li><a href="https://site3.com">Site 3</a></li>
`;

