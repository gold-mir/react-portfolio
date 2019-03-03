import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProjectDetails from './projectDetails';


function ProjectList (props){

  let toDisplay = props.projects;

  return (
    <div>
      {toDisplay.map((project, index) => 
        <div key={index}>
          <h5><Link to={`/projects/${index}`}>{project.title}</Link></h5>
        </div>
      )}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array,
  count: PropTypes.number,
  start: PropTypes.number
}

export default ProjectList;