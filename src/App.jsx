import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/pokemonCard.jsx'
import PropTypes from 'prop-types';







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
  /*   const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevClick = () => {
    setPokemonIndex((Index) => Index - 1);
  };

  const handleNextClick = () => {
    setPokemonIndex((Index) => Index + 1);
  };

  return (
    <div>
      {pokemonList[pokemonIndex].name && (
        <h1>{pokemonList[pokemonIndex].name}</h1>
      )}
      {pokemonList[pokemonIndex].imgSrc && (
        <img src={pokemonList[pokemonIndex].imgSrc} alt={pokemonList[pokemonIndex].name} />
      )}
      {pokemonIndex > 0 && (
        <button onClick={handlePrevClick}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNextClick}>Suivant</button>
      )}
    </div>
  );
}
*/


 const [pokemonIndex, setPokemonIndex] = useState(0);

  function handlePrevClick() {
    setPokemonIndex((prevIndex) => prevIndex - 1);
  }

  function handleNextClick() {
    setPokemonIndex((prevIndex) => prevIndex + 1);
  }

  const currentPokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <NavBar
        currentIndex={pokemonIndex}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <h1>{currentPokemon.name}</h1>
      <img src={currentPokemon.imgSrc} alt={currentPokemon.name} />
    </div>
  );
}

export default App;
