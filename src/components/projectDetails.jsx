import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectDetails(props) {
  let id = props.match.params.id;
  let project = props.projects.filter(item => item.id === id)[0];
  console.log(project);

  if (project) {
    return (
      <React.Fragment>
        <style jsx>{`
          .projectDetailBody {
            width: 100%;
            height: 100%;
            text-align: center;
          }
          .projectDetailBody h2 {
            text-align: center;
          }

          .projectDetailBody a {
            text-align: center;
          }

          p {
            margin-left: 15px;
            text-align: left;
          }
        `}</style>
        <div className="projectDetailBody">
          <h2>{project.title}</h2>
          <p>{project.details}</p>
          <a className="" href={project.link}>Github Link</a>
        </div>
      </React.Fragment>)
  } else {
    return <div></div>
  }
}

ProjectDetails.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object)
}

export default withRouter(ProjectDetails);