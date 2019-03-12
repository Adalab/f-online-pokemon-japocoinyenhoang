import React, { Component } from 'react';
import PokemonDetails from './PokemonDetails';

class PokemonList extends Component{
    render (){
        const {filteredPokemon}=this.props;
        return(
            <ul className="Pokemon__list">
                {filteredPokemon.map(item =>{
                   return(
                       <li className="pokemon__item" key="item.id">
                            <PokemonDetails name={item.name} image={item.sprites.front_default} id={item.id} types={item.types} />
                        </li>
                   );
                })}
            </ul>
        );
    }
}
export default PokemonList;