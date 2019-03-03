import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProjectDetails from './projectDetails';


function ProjectList (props){

  console.log(props.count);

  let start = props.start || 0;
  let end = props.count? start + props.count : props.projects.length;

  let toDisplay = props.projects.slice(start, end);

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