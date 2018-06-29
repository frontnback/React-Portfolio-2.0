import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="resume-grid">

        <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
          <img
              src="https://avatars0.githubusercontent.com/u/34671675?v=4"
              alt="avatar"


              style={{height: '245px', width: '245px', borderRadius: '30%'}}
              />
          </div>

          <h2 style={{paddingTop: '2em'}}>Darin Stone</h2>
          <h4 style={{color: 'charcoal'}}>Web Developer</h4>
          <hr style={{borderTop: '5px solid teal', width: '50%'}}/>
          <p>Front End, Back End, UI/UX Designer</p>
          <hr style={{borderTop: '5px solid teal', width: '50%'}}/>
          <h5>Address:</h5>
          <p>723 2 St Miami Beach FL, 33143</p>
          <h5>Phone:</h5>
          <p>( 734) 644-7808 </p>
          <h5>Email:</h5>
          <p>darinstone@gmail.com</p>
          <hr style={{borderTop: '5px solid teal', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>

          <h2>Education</h2>

          <Education
            startYear={2011}
            endYear={2015}
            schoolName="Arizona State University"
            schoolDescription="B.S. of Genetics / Biotechnology"
            />
          <Education
            startYear={2018}
            endYear={2018}
            schoolName="Wyncode Academy"
            schoolDescription="Web App, GIT, REST API, Agile certification"
            />
          <hr style={{borderTop: '5px solid teal'}}/>

            <h2>Experience</h2>

          <Experience
            startYear= "March 2016"
            endYear= "Nov 2017"
            jobName="Marcus Millichap - Investment Sales"
            jobDescription="Data-mine, research, cold call active/passive investors on their Retail commerical Real Estate, calculate/ Negotiate CAP rates and Net Operating Income."
            />

          <Experience
            startYear= "Dec 2015"
            endYear= "May 2015"
            jobName="Oxford Global - Technical Recruiter"
            jobDescription="Full-Cycle recruiting, Software-Hardware, Semi-conductor industry. Source professionals for national positions both temporary and direct hire."
            />

            <Experience
              startYear= "May 2014"
              endYear= "May 2015"
              jobName="Payjunction - Outside Sales"
              jobDescription="Prospect merchant services from self generated leads and influence Decision makers on SaaS"
              />

            <Experience
              startYear= "Jan 2014"
              endYear= "May 2014"
              jobName="AT+T - Account Manager"
              jobDescription="Provide Telecommunication solutions for small to medium size businesses."
              />

            <hr style={{borderTop: '5px solid teal'}}/>


        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
