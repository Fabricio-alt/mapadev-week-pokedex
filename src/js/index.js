/*
quando clicar no pokémon listagem, temos que esconder o pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com 2 elementos
1 - listagem
2 - cartão pokémon

precisamos criar 2 variáveis no JS para trabalhar com os elementos na tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id pra saber qual cartão mostrar
-remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado
*/

//precisamos criar duas variáveis no JS para trabalhar com os elementos na tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
  //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
  pokemon.addEventListener('click', () => {
    //- remover a classe aberto só do cartão que está aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')
    //- ao clicar em um pokémon da listagem pegamos o id pra         saber qual cartão mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('aberto')
    
    //-remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    //-adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
  })
})