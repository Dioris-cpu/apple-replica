import React from "react"
import { Grid } from "@material-ui/core";
import Header from './componets/Header'
import './App.css';
import Content from "./componets/Content";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content/>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
