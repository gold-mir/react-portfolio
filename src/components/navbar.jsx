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
    <div>
      <style jsx>{`
        // .navbarItem {
        //   display: inline-block;
        // }

        .selected {
          border-width: 1px;
          border-style: solid;
        }

        #navbar {
          display: flex;
          justify-content: space-between;
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
    </div>
  )
}

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object)
}

export default withRouter(Navbar);