import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ProjectList from './projectList';
import ProjectDetails from './projectDetails';

function Projects(props) {
  return (
    <div>
      <style jsx>{`
        #projectDetails {
          float: right;
          width: 45%;
          height: 500px;
          border-left: 1px solid black;
          border-bottom: 1px solid black;
        }
      `}</style>
      <Route path='/projects/:id' render={(otherProps) => 
        <div id="projectDetails">
          <ProjectDetails projects={props.projects}/>
        </div>
      }/>
      <ProjectList projects={props.projects}/>
    </div>
  )
}

export default withRouter(Projects);