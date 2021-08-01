
import './App.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainApp from './Components/MainApp';

function App() {
  return (
    <>
      <Grid
        container
        justify='center'>
        <Grid item xs={12}>
          <Header />
        </Grid>
        {/*Place Holder */}
        <Grid
          item xs={1}></Grid>
        {/*Main App */}
        <Grid item justify='center' xs={10}>
          <MainApp />
        </Grid>
        {/*Place Holder */}
        <Grid item xs={1}>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default App;
