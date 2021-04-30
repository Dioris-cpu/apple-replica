import React from "react";
import { Grid } from "@material-ui/core";
import Audio from './Audio';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree'
import Footer from './Footer'



const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12}>
      <SectionOne/>      
        
      </Grid>
    < Grid item xs={12} sm={12}>
      <SectionTwo/>
    </Grid>
    <Grid item xs={12} sm={12}>
      <SectionThree/>
    </Grid>
    <Grid item xs={12} sm={12}>
      <Footer/>
    </Grid>
    </Grid>
  );
};

export default Content;
