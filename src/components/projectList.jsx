import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProjectDetails from './projectDetails';


function ProjectList(props) {
  let start = props.start || 0;
  let end = props.count ? start + props.count : props.projects.length;

  let toDisplay = props.projects.slice(start, end);

  return (
    <React.Fragment>
      <style jsx>{`
        .projectListItem {
          display: inline-block;
          border: 1px solid black;
          width: 12em;
          height: 8em;
          margin-top: 1em;
          margin-left: 1em;
          vertical-align: top;
          padding: 8px;
        }

        .projectListItem h3 {
          text-align: center;
        }
      `}</style>
      <div>
        {toDisplay.map((project, index) =>
          <div key={index} className="projectListItem">
            <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>
            <p>{project.description}</p>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array,
  count: PropTypes.number,
  start: PropTypes.number
}

export default ProjectList;