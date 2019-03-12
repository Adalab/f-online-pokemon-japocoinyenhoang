import React, {Component} from 'react';

class Filter extends Component{
    render(){
        const {handleInputValue} = this.props;
        return (
            <div className="header__input--container">
            <input className="header__input" type="text" onKeyUp={handleInputValue} placeholder="Filtra Pokemons por nombre..."></input>
            </div>
        )
    }
}
export default Filter;