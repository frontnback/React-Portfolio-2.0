import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
  render() {
    return(
      <div className="aboutMeBg">
        <Grid className="aboutme-grid">
          <Cell col={12}>

          <div className="banner-text">
            <h1>About Me</h1>
            <p>Driven developer focused on Web Applications and Block-Chain Technologies. Financial technology, Smart Contracts are some of the products in which I’m currently engaged</p>


              <p>Wyncode graduate trained in OOP Languages, Git concepts and RESTful API </p>


              <p>Along side Ruby, JavaScript and Python I continue to push my foreign Language skills in Brazilian-Portuguese </p>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}


export default AboutMe;
