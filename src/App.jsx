import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/pokemonCard.jsx'
import PropTypes from 'prop-types';
import NavBar from './components/navBar'






PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })
}






const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {



 const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePokemonClick = (index) =>  {
    setPokemonIndex(index);
  };


  const currentPokemon = pokemonList[pokemonIndex];

  return (
    <div>
       <PokemonCard pokemon={currentPokemon} />
      <NavBar  pokemonList={pokemonList} onPokemonClick={handlePokemonClick} />
    
    </div>
  ); }
      
export default App;





















