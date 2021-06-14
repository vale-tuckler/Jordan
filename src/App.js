import React from 'react';
import Home from "./pages/home";
import Projects from './pages/projects';
import projectsInfo from './pages/projects-info';
import About from './pages/about';
import Contact from './pages/contact';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path = "/" component={Home}/>
      <Route exact path = "/projects" component={Projects}/>
      <Route exact path = "/projects_info" component = {projectsInfo}/>
      <Route exact path = "/about" component = {About}/>
      <Route exact path = "/contact" component = {Contact}/>
    </BrowserRouter>
  );
}

export default App;
