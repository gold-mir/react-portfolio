import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import components
import Home from './home';
import Projects from './projects';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: "Miranda Keith",
      about: "Hi my name is Miranda",
      projects: [
        {
          title: "Project 1",
          description: "A project that does stuff.",
          link: "github.com/someproject"
        },
        {
          title: "Project 2",
          description: "A project that does stuff.",
          link: "github.com/someproject"
        },
        {
          title: "Project 3",
          description: "A project that does stuff.",
          link: "github.com/someproject"
        },
        {
          title: "Project 4",
          description: "A project that does stuff.",
          link: "github.com/someproject"
        },
        {
          title: "Project 5",
          description: "A project that does stuff.",
          link: "github.com/someproject"
        },
        {
          title: "Project 6",
          description: "A project that does stuff.",
          link: "github.com/someproject"
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Switch>
          <Route exact path='/' render={() => 
            <Home projects={this.state.projects} about={this.state.about}/>
            }/>
          <Route path='/projects' render={(props) => 
            <Projects projects={this.state.projects}/>
          }/>
          <Route exact path='/admin' render={(props) => <div>This will be an admin page to add and remove projects</div>}/>
          <Route render={(props) => <div>Page not found.</div>}/>
        </Switch>
      </div>
    );
  }
}

export default App;