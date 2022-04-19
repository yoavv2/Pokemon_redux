import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { GetPokemonList } from '../redux/actions/pokemonActions';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';

function PokemonTable() {
  const history = useNavigate();
  const [search, setSearch] = useState('');
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

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name of Pokemon</TableCell>
              <TableCell align='right'>Pokemon url</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemonList.data.map((pokemon) => (
              <TableRow
                key={pokemon.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {pokemon.name}
                </TableCell>
                <TableCell align='right'>
                  {' '}
                  <Link to={`/pokemon/${pokemon.name}`}>View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  return (
    <>
      <p>Search: </p>
      <SearchBar search={search} setSearch={setSearch} />
      <Button
        variant='text'
        color='primary'
        onClick={() => history(`/pokemon/${search}`)}
      ></Button>
      {showData()}
    </>
  );
}

export default PokemonTable;
