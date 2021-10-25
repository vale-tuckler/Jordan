import React from 'react';
import Home from "./pages/home";
import Projects from './pages/projects';
import projectsInfo from './pages/projects-info';
import About from './pages/about';
import Contact from './pages/contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'gsap/dist/gsap';
function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path = "/" component={Home}/>
          <Route path = "/projects" component={Projects}/>
          <Route path = "/projects_info" component = {projectsInfo}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/contact" component = {Contact}/>              
      </Switch>
    </BrowserRouter>
  );
}

export default App;
