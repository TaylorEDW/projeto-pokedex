const pokemonNome = document.querySelector('.pokemon__nome')
const pokemonNumero = document.querySelector('.pokemon__numero')
const pokemonImagem = document.querySelector('.pokemon__image')
const input = document.querySelector('.input__search')
const form = document.querySelector('.form')
const botaoAnt = document.querySelector('.btn-ant')
const botaoProx = document.querySelector('.btn-prox')

let buscarPokemon=1;

const fetchPokemon = async (pokemon) => {

    const ApiResposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (ApiResposta.status == 200) {
        const data = await ApiResposta.json();
    return data;
    }


    
}

const renderPokemon = async (pokemon) => {

    pokemonNome.innerHTML='Carregando...';
    pokemonNumero.innerHTML='';

    const data = await fetchPokemon(pokemon);

    if(data){
    pokemonImagem.style.display= 'block';
    pokemonNome.innerHTML = data.name;
    pokemonNumero.innerHTML = data.id;
    pokemonImagem.src = pokemonImagem.src = data.sprites.front_default;;
    buscarPokemon=data.id;
    } else{
        pokemonImagem.style.display= 'none';
        pokemonNome.innerHTML = 'Não encontrado';
        pokemonNumero.innerHTML = '';
    }
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
   
});
botaoAnt.addEventListener('click', () => {
    if (buscarPokemon>1) {
        buscarPokemon-=1;
    renderPokemon(buscarPokemon);
    }
});
botaoProx.addEventListener('click', () => {
    buscarPokemon+=1;
    renderPokemon(buscarPokemon);
   
});
renderPokemon(buscarPokemon);
