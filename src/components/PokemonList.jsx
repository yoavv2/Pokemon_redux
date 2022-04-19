import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetPokemonList } from '../redux/actions/pokemonActions';
import PokemonTable from './PokemonTable';
function PokemonList() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };
  const showData = () => {
    if (pokemonList?.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonList?.errorMsg) {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return pokemonList?.data.map((pokemon) => (
      <div key={pokemon.id}>
        <p>{pokemon.name}</p>
        <Link to={`/pokemon/${pokemon.name}`}>View</Link>
      </div>
    ));
  };
  console.log(pokemonList);
  return (
    <div>
      <h2>pokemons list</h2>
      {showData()}
    </div>
  );
}
export default PokemonList;
