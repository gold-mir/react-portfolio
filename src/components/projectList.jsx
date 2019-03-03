import React from 'react';
import PropTypes from 'prop-types';


function ProjectList (props){
  return (
    <div>{props.count} Projects will go here, out of {props.projects.length} total</div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array,
  count: PropTypes.number,
  start: PropTypes.number
}

export default ProjectList;