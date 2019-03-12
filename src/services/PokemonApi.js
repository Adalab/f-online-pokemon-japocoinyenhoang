const ENDPOINT="https://pokeapi.co/api/v2/pokemon/?limit=25&offset=25";
const fetchPokemonApi =()=> fetch(ENDPOINT).then(response =>response.json());
export {fetchPokemonApi}