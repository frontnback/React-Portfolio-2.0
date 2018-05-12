import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
}


toggleCategories() {

if(this.state.activeTab === 0){
  return(
    <div className="projects-grid">
       {/* JavaScript Project #1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url(images/tronanimations.png)center / cover'}}>
          Tron Animation
        </CardTitle>
        <CardText>
        Simple Animation with TRON Theme
        </CardText>
        <CardActions border>
          <Button colored>
            <a href="https://github.com/frontnback/TRONgrinder">
           <i className="fa fa-github-square" aria-hidden="true"/>Github</a>
            </Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        </CardMenu>
      </Card>

      {/* JavaScript Project #2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background:'url(images/speedracer.png) center / cover'}} >Speed Racer Game</CardTitle>
      <CardText>
        Basic JavaScript / JQuery Game
      </CardText>
      <CardActions border>
        <Button colored>
          <a href="https://github.com/frontnback/Speed-Racer">
         <i className="fa fa-github-square" aria-hidden="true"/>Github</a>
          </Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
      </CardMenu>
    </Card>

    {/* JavaScript Project #3 */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '176px', background:'url(images/Pong.png) center / cover'}} >Ping Pong</CardTitle>
    <CardText>
      Classic Pong Game
    </CardText>
    <CardActions border>
      <Button colored>
        <a href="https://github.com/frontnback/PingPong">
       <i className="fa fa-github-square" aria-hidden="true"/>Github</a>
        </Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
     </CardMenu>
     </Card>
   </div>
    )
  } else if(this.state.activeTab === 1) {
  return (
    <div className="projects-grid">
       {/* Ruby Project #1 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#000', height: '176px', background:'url(images/BTCasino.png) center / cover'}}>
         </CardTitle>
       <CardText>
         Ruby-On-Rails BitCoin Casino Application (Team Project)
       </CardText>
       <CardActions border>
         <Button colored>
           <a href="https://github.com/frontnback/Rails-Casino">
          <i className="fa fa-github-square" aria-hidden="true"/>Github</a>
           </Button>
       </CardActions>
       <CardMenu style={{color: '#000'}}>
       </CardMenu>
     </Card>

      {/* Ruby Project #2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#000', height: '176px', background:'url(images/library.png) center / cover'}}>
      </CardTitle>
      <CardText>
        Library Book API search
      </CardText>
      <CardActions border>
        <Button colored>
          <a href="https://github.com/frontnback/Library_Book_API">
         <i className="fa fa-github-square" aria-hidden="true" /> Github</a>
          </Button>
      </CardActions>
      <CardMenu style={{color: '#000'}}>
      </CardMenu>
    </Card>

    {/* Ruby Project #3 */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: '#000', height: '176px', background:'url(images/MADshades.png) center / cover'}}> </CardTitle>
    <CardText>
      Online Store With Shopping Cart and Square Payment (Team Project)
    </CardText>
    <CardActions border>
    <Button colored>
      <a href="https://github.com/frontnback/Team-MAD-FF">
      <i className="fa fa-github-square" aria-hidden="true" /> Github</a>
    </Button>
    </CardActions>
    <CardMenu style={{color: '#000'}}>
     </CardMenu>
     </Card>
   </div>
    )

  } else if(this.state.activeTab === 2) {
    return (

     <div className="projects-grid">
        {/* React Project #1 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: '#fff', height: '176px', background:'url(images/Weatherapp.png)center / cover'}} ></CardTitle>
         <CardText>
           This Weather App was my first React Application built
         </CardText>
         <CardActions border>
           <Button colored>
             <a href="https://github.com/frontnback/React-Weather-App">
            <i className="fa fa-github-square" aria-hidden="true" /> Github</a>
             </Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
         </CardMenu>
       </Card>

       {/* React Project #2 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#000', height: '176px', background:'url(images/react.png) center / cover'}} >React Project #2</CardTitle>
       <CardText>
       </CardText>
       <CardActions border>
         <Button colored>
           <a href="">
          <i className="fa fa-github-square" aria-hidden="true" /> Github</a>
           </Button>
       </CardActions>
       <CardMenu style={{color: '#fff'}}>
       </CardMenu>
     </Card>

     {/* React Project #3 */}
     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
       <CardTitle style={{color: '#000', height: '176px', background:'url(images/react.png) center / cover'}} >React Project #2</CardTitle>
     <CardText>
     </CardText>
     <CardActions border>
       <Button colored>
         <a href="">
        <i className="fa fa-github-square" aria-hidden="true" /> Github</a>
         </Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
     </CardMenu>
    </Card>
    </div>
    )
  }
}

    render() {
    return(
      <div>
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>JavaScript</Tab>
            <Tab>Ruby</Tab>
            <Tab>React</Tab>
          </Tabs>

          <div className="bgImage">
            <Grid>
              <cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </cell>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
