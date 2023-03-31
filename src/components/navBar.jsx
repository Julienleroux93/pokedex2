import { useState } from "react";





function NavBar({ pokemonList, onPokemonClick }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => onPokemonClick(index)}
         
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}



export default NavBar



