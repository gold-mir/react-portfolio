import React from 'react';
import PropTypes from 'prop-types';

import ProjectList from './projectList';
import ContactDisplay from './contactDisplay';

function Home(props){

  return (
    <div>
      <style jsx>{`
        // .container {
        //   border-style: solid;
        //   border-width: 1px;
        // }
        #descriptionBox {
          width: 65%;
          display: inline-block;
          vertical-align: top;
        }
        #infoBox {
          vertical-align: top;
          display: inline-block;
          width: 29%;
          float: right;
        }
      `}</style>
      <div className="container" id="descriptionBox">
        <p>{props.about.description}</p>
      </div>
      <div className="container" id="infoBox">
        <ContactDisplay contactInfo={props.about.contacts}/>
      </div>
    </div>
  )
}

Home.propTypes = {
  about: PropTypes.object
}

export default Home;