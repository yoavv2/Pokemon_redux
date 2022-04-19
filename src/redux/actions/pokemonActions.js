import axios from 'axios';

export const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: 'POKEMON_LIST_LOADING',
    });

    const perPage = 15;
    const offset = page * perPage - perPage;

    const res = await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
      )
      .catch((err) => {
        console.log('Err: ', err);
      });

    dispatch({
      type: 'POKEMON_LIST_SUCCESS',
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: 'POKEMON_LIST_FAIL',
    });
  }
};

export const GetPokemon = (name) => async (dispatch) => {
  try {
    dispatch({
      type: 'POKEMON_MULTIPLE_LOADING',
    });

    const res = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .catch((err) => {
        console.log('Err: ', err);
      });

    dispatch({
      type: 'POKEMON_MULTIPLE_SUCCESS',
      payload: res.data,
      pokemonName: name,
    });
  } catch (e) {
    dispatch({
      type: 'POKEMON_MULTIPLE_FAIL',
    });
  }
};
