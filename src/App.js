import React, { Component } from 'react';
import {fetchPokemonApi} from './services/PokemonApi';
import Filter from './components/Filter';
import PokemonList from './components/PokemonList';
import './App.scss';

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
      <header className="PokeHeader">
        <Filter handleInputValue={this.handleInputValue} />
      </header>
      <main className="PokemonResult">
        <PokemonList filteredPokemon={this.seachFilter()} />
      </main>
      </div>
    );
  }
}

export default App;
