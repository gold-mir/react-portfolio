import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import components
import Home from './home';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: "Miranda Keith",
      projects: [],
      about: "Hi my name is Miranda"
    }
  }

  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Switch>
          <Route exact path='/' render={() => 
            <Home projects={this.state.projects} about={this.state.about}/>}
          />
          <Route exact path='/projects' render={(props) => <div>This will be a list of projects</div>}/>
          <Route exact path='/admin' render={(props) => <div>This will be an admin page to add and remove projects</div>}/>
          <Route render={(props) => <div>Page not found.</div>}/>
        </Switch>
      </div>
    );
  }
}

export default App;