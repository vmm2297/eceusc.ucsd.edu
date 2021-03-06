import * as React from 'react';
import {Container} from './helpers';

export default class Outreach extends React.Component {

  render() {
    return (<div>
    <Container
        header="Outreach"
        subheader=""
        content="Building on the momentum of our outreach activities within the ECE community, ECE USC has launched our very first outreach program. As part of this effort, we plan on establishing an outreach committee that will assist in planning and hosting outreach events by partnering with a local high school and peak students’ interest in the exciting field of ECE. Alongside our outreach committee, we plan to collaborate with diversity and honor engineering organizations such as SWE and HKN, respectively, to expose K-12 students to careers in STEM. We will be targeting middle school and high school girls with SWE and we will be hosting educational workshops for local high schools with HKN."
        content2={
          <div style={{fontSize: '1.3rem', textAlign:'center'}}>
            Sign up for our Outreach Committee {' '}
            <a href="https://goo.gl/forms/7ClxPLGr4HdboiUG2" target="_blank">here!</a>
          </div>
          
        }/>
    </div>);
  }
}
