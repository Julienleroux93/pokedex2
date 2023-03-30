import { useState } from "react";
import { pokemonList } from "./pokemonList";


function NavBar ({onPrevClick, onNextClick, CurrentIndex}) {

return (
<div>
    {CurrentIndex > 0 && (
        <button onClick={onPrevClick}>Prédedent</button>)}
        {Current < pokemonList.length - 1 && (
        <button onClick={onNextClick}>Suivant</button>
      )}
</div>

)}



export default NavBar
