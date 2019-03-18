import React, { Component } from 'react';
import '../stylesheets/PokemonsDetails.scss';

class PokemonDetails extends Component{
    render(){
        const {name, image, id, types}= this.props;
        return(
            <div className="pokemonDetails__container">
                <div className="pokemonDetails__image--container">
                    <img className="pokemonDetails__img" src={image} alt={name} />
                    <p className="pokemonDetails__id">ID / {id}</p>
                </div>
                <div className="pokemonDetailsInfo--container">
                    <p className="pokemonName">{name}</p>
                    <ul className="pokemonTypes">
                        {types.map((item, index)=>{
                            return(
                                <li className="pokemonTypes__item" key={index}>{item.type.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
export default PokemonDetails;