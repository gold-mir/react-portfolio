import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import components
import Home from './home';
import Projects from './projects';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      about: {
        name: "Miranda Thalia Keith",
        description: "Hi my name is Miranda! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia quis vel. Neque viverra justo nec ultrices dui sapien. Tristique nulla aliquet enim tortor at auctor urna. Faucibus nisl tincidunt eget nullam. Urna id volutpat lacus laoreet non curabitur. Vitae tempus quam pellentesque nec nam aliquam sem et. Quam id leo in vitae. Non quam lacus suspendisse faucibus interdum. Sed velit dignissim sodales ut eu. Vel pretium lectus quam id leo in vitae turpis. Lacus laoreet non curabitur gravida arcu. Viverra justo nec ultrices dui sapien eget. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Enim sit amet venenatis urna cursus eget nunc. Morbi tristique senectus et netus et. Quam quisque id diam vel quam elementum. \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia quis vel. Neque viverra justo nec ultrices dui sapien. Tristique nulla aliquet enim tortor at auctor urna. Faucibus nisl tincidunt eget nullam. Urna id volutpat lacus laoreet non curabitur. Vitae tempus quam pellentesque nec nam aliquam sem et. Quam id leo in vitae. Non quam lacus suspendisse faucibus interdum. Sed velit dignissim sodales ut eu. Vel pretium lectus quam id leo in vitae turpis. Lacus laoreet non curabitur gravida arcu. Viverra justo nec ultrices dui sapien eget. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Enim sit amet venenatis urna cursus eget nunc. Morbi tristique senectus et netus et. Quam quisque id diam vel quam elementum.",
        contacts: [
          {
            type: "Email",
            value: "miranda.keith.42@gmail.com"
          },
          {
            type: "Discord",
            value: "Thalia#0211"
          }
        ]
      },
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
        <h1>{this.state.about.name}</h1>
        <hr/>
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