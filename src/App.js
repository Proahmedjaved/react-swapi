import './App.css';
import { React, useState, useEffect } from 'react';
import CharacterCard from "./components/CharacterCard"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export function App() {

  const [characters, setCharac] = useState([])

  const URL = "https://swapi.dev/api/";

  useEffect(() => {
    fetch(URL + "people").then(response => response.json().then(data => {
      setCharac(data.results)
    }))
  }, []);

  return (

    <Box sx={{ flexGrow: 1, paddingTop: 3 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
        {characters.map((character, index) =>
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CharacterCard {...character} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}





