import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img

            />
          <div className="banner-text">
            <h1>Darin Stone</h1>
            <h1>Full Stack Web Developer</h1>

          <hr/>
          <p> Ruby | Python | JavaScript | React | HTML/CSS | Bootstrap  </p>
            <div className="social-links">
                {/*linkedin*/}
              <a href="https://www.linkedin.com/in/darin-stone-1b52bb30/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
                {/*Github*/}
              <a href="https://github.com/frontnback" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
                {/*twitter*/}
              <a href="https://twitter.com/darinstone" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter-square" aria-hidden="true" />
              </a>

          </div>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
