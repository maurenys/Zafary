
const irWhatzapp =  document.querySelector ('#btn-what');
const irzpo =  document.querySelector('#btn-zpo');    
const irhome =  document.querySelector('#btn-home');
const nombrepagina =  document.querySelector('#nombre-pagina');

irWhatzapp.addEventListener('click', navegarWhatzApp);
irzpo.addEventListener('click', navegarZpotify);
irhome.addEventListener('click', navegarhome);

function navegarWhatzApp() {
    const contDinamico  = document.querySelector('#contenido-dinamico');
    contDinamico.setAttribute( 'src',  '../WhatzApp/index.html');
    nombrepagina.innerHTML  = 'WhatzApp';
    
}

function navegarZpotify() {
    const contDinamico  = document.querySelector('#contenido-dinamico');
    contDinamico.setAttribute('src', '../Zpotify/index.html');
    nombrepagina.innerHTML  = 'Zpotify';
    
}

function navegarhome() {
    const contDinamico  = document.querySelector('#contenido-dinamico');
    contDinamico.setAttribute('src', '../layout/index.html');
    nombrepagina.innerHTML  = 'Zafary';
    
}

