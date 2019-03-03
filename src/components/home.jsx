import React from 'react';
import PropTypes from 'prop-types';
import ProjectList from './projectList';

function Home(props){
  return (
    <div>
      <h2>This is the home page!</h2>
      <ProjectList projects={props.projects} count={4}/>
    </div>
  )
}

Home.propTypes = {
  projects: PropTypes.array,
  about: PropTypes.string
}

export default Home;