const inputNome = document.getElementById('nome');
const botoesPrincipais = document.querySelectorAll('.button-principal');
const BotaoResert = document.getElementById('Button_final');





const inputValido = ({ target }) => {
    
    if (target.value.length > 2) {
        botoesPrincipais.forEach(botao => {
            botao.removeAttribute('disabled');
            
        });
    } else {
        botoesPrincipais.forEach(botao => {
            botao.setAttribute('disabled', 'disabled');
        });
    }
}

inputNome.addEventListener('input', inputValido);




document.addEventListener('DOMContentLoaded', (event) => {
    //const parafra = documento.getElementById('pergunta-estado');
    const norteButton = document.getElementById('norte');
    const sulButton = document.getElementById('sul');
    const centroButton = document.getElementById('Centro');
    const SuldesButton = document.getElementById('Suldeste');
    const NortDesButton = document.getElementById('Nordeste');
 //----------------------------------------------------------------------
    const norteButtons = document.getElementById('norte-buttons');
    const sulButtons = document.getElementById('sul-buttons');
    const centroButtons = document.getElementById('Centro-buttons');
    const SuldesButtons = document.getElementById('Suldeste-buttons');
    const NortDesButtons = document.getElementById('Nordeste-buttons');
    const resultado = document.getElementById('resultado');
    
//----------------------------------------




//----------------------------------------------------------------------
    let primeiraEscolha = '';
    let segundaEscolha = '';

    

    norteButton.addEventListener('click', () => {
        primeiraEscolha = 'Norte';
        norteButtons.classList.remove('hidden');
        sulButtons.classList.add('hidden');
        SuldesButtons.classList.add('hidden');
        NortDesButtons.classList.add('hidden');
        centroButtons.classList.add('hidden');
        resultado.classList.add('hidden');
        //parafra.classList.remove('hidden');
        

    });

    sulButton.addEventListener('click', () => {
        primeiraEscolha = 'Sul';
        sulButtons.classList.remove('hidden');
        norteButtons.classList.add('hidden');
        resultado.classList.add('hidden');
        SuldesButtons.classList.add('hidden');
        NortDesButtons.classList.add('hidden');
        centroButtons.classList.add('hidden');
    });

    centroButton.addEventListener('click', () => {
        primeiraEscolha = 'Centro-Oeste';
        sulButtons.classList.add('hidden');
        norteButtons.classList.add('hidden');
        centroButtons.classList.remove('hidden');
        SuldesButtons.classList.add('hidden');
        NortDesButtons.classList.add('hidden');
        
        resultado.classList.add('hidden');
    });

    SuldesButton.addEventListener('click', () => {
        primeiraEscolha = 'Sudeste';
        sulButtons.classList.add('hidden');
        norteButtons.classList.add('hidden');
        centroButtons.classList.add('hidden');
        SuldesButtons.classList.remove('hidden');
        NortDesButtons.classList.add('hidden');
        
        resultado.classList.add('hidden');
    });

    NortDesButton.addEventListener('click', () => {
        primeiraEscolha = 'Nordeste';
        sulButtons.classList.add('hidden');
        norteButtons.classList.add('hidden');
        centroButtons.classList.add('hidden');
        SuldesButtons.classList.add('hidden');
        NortDesButtons.classList.remove('hidden');
        
        resultado.classList.add('hidden');
    });

    const botoesNorte = document.querySelectorAll('#norte-buttons button');
    botoesNorte.forEach((botao) => {
        botao.addEventListener('click', () => {
            segundaEscolha = botao.innerText;
            mostrarResultado();
            mostrarImagem(botao.id);
    


        });
    });

    const botoesSul = document.querySelectorAll('#sul-buttons button');
    botoesSul.forEach((botao) => {
        botao.addEventListener('click', () => {
            segundaEscolha = botao.innerText;
            mostrarResultado();
            mostrarImagem(botao.id);
        });
    });


    const botoesCentro = document.querySelectorAll('#Centro-buttons button')
    botoesCentro.forEach((botao) => { 
        botao.addEventListener('click',() =>{
        segundaEscolha = botao.innerText;
        mostrarResultado()
        mostrarImagem(botao.id);


        });

    });

    const BotoesSuld = document.querySelectorAll('#Suldeste-buttons button')
    BotoesSuld.forEach((botao) => { 
        botao.addEventListener('click',() =>{
        segundaEscolha = botao.innerText;
        mostrarResultado()
        mostrarImagem(botao.id);

        });

    });

    const BotoesNorde = document.querySelectorAll('#Nordeste-buttons button')
    BotoesNorde.forEach((botao) => { 
        botao.addEventListener('click',() =>{
        segundaEscolha = botao.innerText;
        mostrarResultado()
        mostrarImagem(botao.id);

        });

    });



    function mostrarResultado() {
        const nome = inputNome.value;
        resultado.innerHTML = `O  ${nome} reside na região ${primeiraEscolha} e mora no estado ${segundaEscolha}.`;
        resultado.classList.remove('hidden');
        
       
    }

    function mostrarImagem(id) {
        const imagens = document.querySelectorAll('img:not(.bandeirape)');
        imagens.forEach(imagem => {
            if (imagem.id === `${id}-img`) {
                imagem.classList.remove('hidden');
            } else {
                imagem.classList.add('hidden');
            }
        });
    }

    
    

    BotaoResert.addEventListener('click', () => {
        inputNome.value = '';
        botoesPrincipais.forEach(botao => {
            botao.setAttribute('disabled', 'disabled');
        });
        norteButtons.classList.add('hidden');
        sulButtons.classList.add('hidden');
        centroButtons.classList.add('hidden');
        SuldesButtons.classList.add('hidden');
        NortDesButtons.classList.add('hidden');
        resultado.classList.add('hidden');  // Certifique-se de que esta linha está presente
        const imagens = document.querySelectorAll('img:not(.bandeirape)');
    imagens.forEach(imagem => {
        imagem.classList.add('hidden');
    });
        primeiraEscolha = '';
        segundaEscolha = '';
    });
});
