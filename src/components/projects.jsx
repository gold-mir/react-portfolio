import React from 'react';
import { Route } from 'react-router-dom';

import ProjectList from './projectList';

function Projects(props) {
  return (
    <div>
      <Route path='/projects/:id' render={(props) => <p>Project details will go here</p>}/>
      <ProjectList projects={props.projects}/>
    </div>
  )
}

export default Projects;