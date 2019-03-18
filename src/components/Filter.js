import React, {Component} from 'react';
import '../stylesheets/Filter.scss';

class Filter extends Component{
    render(){
        const {handleInputValue} = this.props;
        return (
            <div className="header__input--container">
            <input className="header__input" type="text" onKeyUp={handleInputValue} placeholder="filtra pokemons por nombre..."></input>
            </div>
        )
    }
}
export default Filter;