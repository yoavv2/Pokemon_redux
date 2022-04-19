import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import Pokemon from './components/Pokemon';
// import PokemonList from './components/PokemonList';
import PokemonTable from './components/PokemonTable';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import SearchBar from './components/SearchBar';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const history = useNavigate();
  const [value, setValue] = useState('1');
  const [search, setSearch] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static' color='secondary'>
            <Toolbar>
              {/* <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            > */}
              {/* <MenuIcon /> */}
              {/* </IconButton> */}
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                Pokemon
              </Typography>
              {/* <SearchBar search={search} setSearch={setSearch} />
              <Button
                variant='text'
                color='primary'
                onClick={() => history(`/pokemon/${search}`)}
              ></Button> */}
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path='/' element={<PokemonTable />} />
          <Route path='pokemon/:name' element={<Pokemon />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
