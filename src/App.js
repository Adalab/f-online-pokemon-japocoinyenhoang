import React, { Component } from 'react';
import {fetchPokemonApi} from './services/PokemonApi';
import Filter from './components/Filter';
import PokemonList from './components/PokemonList';
import './stylesheets/App.scss';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      pokemonArray: [],
      query: ''
    }
    this.handleInputValue=this.handleInputValue.bind(this);
    this.seachFilter=this.seachFilter.bind(this);
  }

  componentDidMount(){
    this.getApiPokemons()
  }

  getApiPokemons(){
    fetchPokemonApi()
    .then(data=>{
      const promiseResults = data.results.map(item => fetch(item.url));
      Promise.all(promiseResults)
      .then (responses => {
        const responsesResults = responses.map(responses => responses.json())
        Promise.all(responsesResults)
        .then (pokemonData => {
          this.setState({
            pokemonArray: pokemonData
          });
        })
      })
    })
  }

  handleInputValue(event){
    const searchValue= event.currentTarget.value;
    this.setState({
      query: searchValue
    })
  }

  seachFilter(){
    const {pokemonArray, query}= this.state;
    return pokemonArray.filter(item =>item.name.toUpperCase().includes(query.toUpperCase()));
  }


  render() {
    return (
      <div className="App">
      <header className="header__container">
       <div className="triangle triangle__left"></div>
       <div className="triangle triangle__right"></div>
        <Filter handleInputValue={this.handleInputValue} />
      </header>
      <main className="pokemonResult__container">
        <PokemonList filteredPokemon={this.seachFilter()} />
        <div className="circle circle__left"></div>
        <div className="circle circle__right"></div>
      </main>
      </div>
    );
  }
}

export default App;
