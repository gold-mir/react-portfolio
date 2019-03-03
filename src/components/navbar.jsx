import React from 'react';
import { withRouter, matchPath, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar(props){
  const { location, match, routes } = props;

  const locationMatchesNavbarItem = (item) => {
    let match = matchPath(location.pathname, item.route);
    return (match && (match.isExact || item.matchChildren))
  }

  return (
    <React.Fragment>
      <style jsx>{`
        #navbar {
          display: flex;
          justify-content: space-between;
          padding-left: 4em;
          padding-right: 4em;
          padding-top: 8px;
          padding-bottom: 8px;
          border-top: 2px solid;
          border-bottom: 2px solid;
        }

        .navbarItem {
          padding: 5px;
          padding-right: 5em;
          padding-left: 5em;
          background-color: aliceblue;
          border: 1px solid;
          border-radius: 10px;
        }

        .selected {
          background-color: lightblue;
        }
      `}</style>
      <div id="navbar">
        {
          routes.map((route, index) => 
            <div className={`navbarItem ${locationMatchesNavbarItem(route)? "selected": ""}`} key={index}>
              <Link to={route.route}>{route.name}</Link>
            </div>
          )
        }
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object)
}

export default withRouter(Navbar);