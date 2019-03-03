import React from 'react';
import PropTypes from 'prop-types';
import ProjectList from './projectList';

function Home(props){

  var styles = {

  }

  return (
    <div>
      <h2>This is the home page!</h2>
      <div id="projects-container">
        <ProjectList projects={props.projects} count={4}/>
      </div>
    </div>
  )
}

Home.propTypes = {
  projects: PropTypes.array,
  about: PropTypes.string
}

export default Home;