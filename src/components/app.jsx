import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import components
import Home from './home';
import Projects from './projects';
import Navbar from './navbar';

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
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis erat cursus leo ullamcorper, sed ullamcorper nisl tempor. Nullam sagittis arcu commodo, sagittis diam sed, rutrum erat. Quisque blandit viverra quam. Praesent finibus neque mauris, et consectetur urna elementum nec. Sed iaculis nunc ipsum, eu efficitur lorem tincidunt nec. Sed et fermentum sapien. Mauris gravida sem ut hendrerit pulvinar. Sed rhoncus nisi at dolor maximus rhoncus. Fusce et ligula non ante ornare laoreet. Cras ultrices urna in nunc rutrum, in tincidunt lorem sodales. Phasellus a mi sit amet lorem euismod pharetra in ac nibh. Ut quis tristique neque, eu fermentum risus. In auctor neque eros, at tempor purus suscipit quis.",
          link: "https://github.com/gold-mir/tetris",
          id: "1"
        },
        {
          title: "Project 2",
          description: "A project that does a truly spectacular amount of stuff.",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis erat cursus leo ullamcorper, sed ullamcorper nisl tempor. Nullam sagittis arcu commodo, sagittis diam sed, rutrum erat. Quisque blandit viverra quam. Praesent finibus neque mauris, et consectetur urna elementum nec. Sed iaculis nunc ipsum, eu efficitur lorem tincidunt nec. Sed et fermentum sapien. Mauris gravida sem ut hendrerit pulvinar. Sed rhoncus nisi at dolor maximus rhoncus. Fusce et ligula non ante ornare laoreet. Cras ultrices urna in nunc rutrum, in tincidunt lorem sodales. Phasellus a mi sit amet lorem euismod pharetra in ac nibh. Ut quis tristique neque, eu fermentum risus. In auctor neque eros, at tempor purus suscipit quis.",
          link: "https://github.com/gold-mir/tetris",
          id: "2"
        },
        {
          title: "Project 3",
          description: "A project that does stuff.",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis erat cursus leo ullamcorper, sed ullamcorper nisl tempor. Nullam sagittis arcu commodo, sagittis diam sed, rutrum erat. Quisque blandit viverra quam. Praesent finibus neque mauris, et consectetur urna elementum nec. Sed iaculis nunc ipsum, eu efficitur lorem tincidunt nec. Sed et fermentum sapien. Mauris gravida sem ut hendrerit pulvinar. Sed rhoncus nisi at dolor maximus rhoncus. Fusce et ligula non ante ornare laoreet. Cras ultrices urna in nunc rutrum, in tincidunt lorem sodales. Phasellus a mi sit amet lorem euismod pharetra in ac nibh. Ut quis tristique neque, eu fermentum risus. In auctor neque eros, at tempor purus suscipit quis.",
          link: "https://github.com/gold-mir/tetris",
          id: "3"
        },
        {
          title: "Project 4",
          description: "A project that does stuff.",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis erat cursus leo ullamcorper, sed ullamcorper nisl tempor. Nullam sagittis arcu commodo, sagittis diam sed, rutrum erat. Quisque blandit viverra quam. Praesent finibus neque mauris, et consectetur urna elementum nec. Sed iaculis nunc ipsum, eu efficitur lorem tincidunt nec. Sed et fermentum sapien. Mauris gravida sem ut hendrerit pulvinar. Sed rhoncus nisi at dolor maximus rhoncus. Fusce et ligula non ante ornare laoreet. Cras ultrices urna in nunc rutrum, in tincidunt lorem sodales. Phasellus a mi sit amet lorem euismod pharetra in ac nibh. Ut quis tristique neque, eu fermentum risus. In auctor neque eros, at tempor purus suscipit quis.",
          link: "https://github.com/gold-mir/tetris",
          id: "4"
        },
        {
          title: "Project 5",
          description: "A project that does stuff.",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis erat cursus leo ullamcorper, sed ullamcorper nisl tempor. Nullam sagittis arcu commodo, sagittis diam sed, rutrum erat. Quisque blandit viverra quam. Praesent finibus neque mauris, et consectetur urna elementum nec. Sed iaculis nunc ipsum, eu efficitur lorem tincidunt nec. Sed et fermentum sapien. Mauris gravida sem ut hendrerit pulvinar. Sed rhoncus nisi at dolor maximus rhoncus. Fusce et ligula non ante ornare laoreet. Cras ultrices urna in nunc rutrum, in tincidunt lorem sodales. Phasellus a mi sit amet lorem euismod pharetra in ac nibh. Ut quis tristique neque, eu fermentum risus. In auctor neque eros, at tempor purus suscipit quis.",
          link: "https://github.com/gold-mir/tetris",
          id: "5"
        },
        {
          title: "Project 6",
          description: "A project that does stuff.",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis erat cursus leo ullamcorper, sed ullamcorper nisl tempor. Nullam sagittis arcu commodo, sagittis diam sed, rutrum erat. Quisque blandit viverra quam. Praesent finibus neque mauris, et consectetur urna elementum nec. Sed iaculis nunc ipsum, eu efficitur lorem tincidunt nec. Sed et fermentum sapien. Mauris gravida sem ut hendrerit pulvinar. Sed rhoncus nisi at dolor maximus rhoncus. Fusce et ligula non ante ornare laoreet. Cras ultrices urna in nunc rutrum, in tincidunt lorem sodales. Phasellus a mi sit amet lorem euismod pharetra in ac nibh. Ut quis tristique neque, eu fermentum risus. In auctor neque eros, at tempor purus suscipit quis.",
          link: "https://github.com/gold-mir/tetris",
          id: "6"
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <style jsx>{`
          #title-bar {
            text-align: center;
          }
        `}</style>
        <h1 id="title-bar">{this.state.about.name}</h1>
        {/* <hr/> */}
        <Navbar routes={
          [
            { route: "/", name: "Home" },
            { route: "/about", name: "About Me" },
            { route: "/projects", name: "Projects", matchChildren: true }
          ]
        }/>
        {/* <hr/> */}
        <Switch>
          <Route exact path='/about' render={() => 
            <Home about={this.state.about}/>
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