import React from 'react';
import Home from "./pages/home";
import Projects from './pages/projects';
import projectsInfo from './pages/projects-info';
import About from './pages/about';
import Contact from './pages/contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/projects" component={Projects}/>
          <Route exact path = "/projects_info" component = {projectsInfo}/>
          <Route exact path = "/about" component = {About}/>
          <Route exact path = "/contact" component = {Contact}/>              
      </Switch>
    </BrowserRouter>
  );
}

export default App;
