import React from 'react';
import PropTypes from 'prop-types';

function Home(props){
  return (
    <div>
      <h2>This is the home page!</h2>
      <p>There are {props.projects.length} projects.</p>
      <p>{props.about}</p>
    </div>
  )
}

Home.propTypes = {
  projects: PropTypes.array,
  about: PropTypes.string
}

export default Home;