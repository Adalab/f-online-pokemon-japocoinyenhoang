import React, { Component } from 'react';
import PokemonDetails from './PokemonDetails';
import '../stylesheets/PokemonList.scss';

class PokemonList extends Component{
    render (){
        const {filteredPokemon}=this.props;
        return(
            <ul className="pokemonResult__list">
                {filteredPokemon.map(item =>{
                   return(
                       <li className="pokemonResult__item" key="item.id">
                            <PokemonDetails name={item.name} image={item.sprites.front_default} id={item.id} types={item.types} />
                        </li>
                   );
                })}
            </ul>
        );
    }
}
export default PokemonList;