import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

function SearchBar({ search }) {
  const [value, setValue] = useState(search);

  //   const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  console.log(pokemonList);

  <Autocomplete
    value={value}
    onChange={(event, newValue) => {
      if (typeof newValue === 'string') {
        setValue({
          title: newValue,
        });
      } else if (newValue && newValue.inputValue) {
        // Create a new value from the user input
        setValue({
          title: newValue.inputValue,
        });
      } else {
        setValue(newValue);
      }
    }}
    filterOptions={(options, params) => {
      const filtered = filter(options, params);

      const { inputValue } = params;
      // Suggest the creation of a new value
      const isExisting = options.some((option) => inputValue === option.title);
      if (inputValue !== '' && !isExisting) {
        filtered.push({
          inputValue,
          title: `Add "${inputValue}"`,
        });
      }

      return filtered;
    }}
    selectOnFocus
    clearOnBlur
    handleHomeEndKeys
    id='free-solo-with-text-demo'
    options={pokemonList.data}
    getOptionLabel={(option) => {
      // Value selected with enter, right from the input
      if (typeof option === 'string') {
        return option;
      }
      // Add "xxx" option created dynamically
      if (option.inputValue) {
        return option.inputValue;
      }
      // Regular option
      return option.title;
    }}
    renderOption={(props, option) => <li {...props}>{option.title}</li>}
    sx={{ width: 300 }}
    freeSolo
    renderInput={(params) => (
      <TextField {...params} label='Search for Pokemon' />
    )}
  />;
}
export default SearchBar;
