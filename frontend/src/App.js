import React from 'react';
// import axios from 'axios';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Router File Imports
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetails';

import "./App.css";

function App() {

  // Example Connection to the Express Server
  // React.useEffect(() => {
  //   axios.get('/api')
  //     .then(res => console.log(res.data))
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Work} />
            <Route exact path="/project/:id" component={ProjectDetail} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Redirect from="/" exact to ="/home" />
            <Redirect to ="/home" />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
