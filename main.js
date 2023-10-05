// ///////////SELECIONA APENAS UM BOTÃO PARA SER CLICADO
// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

 function tocaSomPom() {
     document.querySelector('#som_tecla_pom').play();
 }

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[4].onclick = tocaSomPom;

