import React, { Component } from 'react';
import Home from './Home.js'
import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import FreeBreakfast  from 'material-ui-icons/FreeBreakfast';
import Resume from './img/BrianConnor_Resume.pdf'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
    	<Router>
      		<div>
            <div className="container-fluid">
              <nav className="row">
                <div className="col-sm-1 logoIcon">
                  <FreeBreakfast color={'white'}/>
                </div>
                <div className="col-sm-2 col-xs-12">
                  <div className="col-sm-2 col-xs-12  navLinks "><a href={Resume} target="_blank">Resume</a></div>
                </div>
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                  <div className="col-sm-3 col-xs-12 navLinks"><Link to={"/home"}>Home</Link></div>
                  <div className="col-sm-3 col-xs-12 navLinks"><Link to={"/AboutMe"}>About</Link></div>
                  <div className="col-sm-3 col-xs-12 navLinks"><Link to={"/Projects"}>Projects</Link></div>
                  <div className="col-sm-3 col-xs-12 navLinks"><Link to={"/Contact"}>Contact</Link></div>
                </div>
              </nav>
            </div>

            <div className="mainWrapper container-fluid">
      		    <Route path={"/home"} component={Home}/>
              <Route path={"/AboutMe"} component={AboutMe}/>
              <Route path={"/Projects"} component={Projects}/>
              <Route path={"/Contact"} component={Contact}/>
            </div>
      		</div> 
      	</Router>
    );
  }
}

export default App;
