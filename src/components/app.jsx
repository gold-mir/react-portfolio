import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

//import components

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: "Miranda Keith",
    }
  }

  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Switch>
          <Route exact path='/' render={(props) => <div>This will be the home page</div>}/>
          <Route exact path='/projects' render={(props) => <div>This will be a list of projects</div>}/>
          <Route exact path='/admin' render={(props) => <div>This will be an admin page to add and remove projects</div>}/>
          <Route render={(props) => <div>Page not found.</div>}/>
        </Switch>
      </div>
    );
  }
}

export default App;