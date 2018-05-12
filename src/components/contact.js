import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2> Darin Stone</h2>
              <img
                src="https://media.licdn.com/dms/image/C5603AQGuHiRjplrwlQ/profile-displayphoto-shrink_200_200/0?e=1531353600&v=beta&t=qeXr9WcinK-QL9bXeTrWkb42Hmhs-n-zL3RePg_sCHU"
                alt="avatar"
                style={{height: '250px', borderRadius: '30%'}}
                />
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>
           </Cell>

            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}> <i className="fa fa-phone-square" aria-hidden="true"/> (734)644-7808
                </ListItemContent>
                </ListItem>
                <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}> <i className="fa fa-envelope" aria-hidden="true"/>darinstone@gmail.com
                </ListItemContent>
                </ListItem>
              </List>
            </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Contact;
