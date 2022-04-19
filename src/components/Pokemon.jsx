import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetPokemon } from '../redux/actions/pokemonActions';
import _ from 'lodash';

function Pokemon() {
  let { name } = useParams();
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(name));
  }, []);

  console.log(pokemonState);

  const showData = () => {
    if (pokemonState.loading) {
      return <div>Loading...</div>;
    }

    if (pokemonState.error) { 
      return <div>Error</div>;
    }

    if (!_.isEmpty(pokemonState.data[name])) {
      const pokeData = pokemonState.data[name];
      return (
        <div className={'pokemon-wrapper'}>
          <div className={'item'}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt='' />
            <img src={pokeData.sprites.back_default} alt='' />
            <img src={pokeData.sprites.front_shiny} alt='' />
            <img src={pokeData.sprites.back_shiny} alt='' />
          </div>
          <div className='item'>
            <h1>Stats</h1>
            {pokeData.stats.map((el) => {
              return (
                <p>
                  {el.stat.name} {el.base_stat}
                </p>
              );
            })}
          </div>
          <div className='item'>
            <h1>Abilities</h1>
            {pokeData.abilities.map((el) => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
        </div>
      );
    }
  };

  return <div>{showData()}</div>;
}

export default Pokemon;
