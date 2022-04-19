import { combineReducers } from 'redux';
import PokemonListReducer from './pokemonReducer';
import pokemonMultipleReducer from './pokemonMultipleReducer';

const rootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: pokemonMultipleReducer,
});
export default rootReducer;
