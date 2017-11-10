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
  Link,
  Redirect
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
    	<Router>
      		<div>
            <div className="container-fluid ctr">
              <nav className="row">
                <div className="col-xs-2 visible-xs dropdown logoIcon">
                    <a 
                      href="#" 
                      class="dropdown-toggle" 
                      data-toggle="dropdown" r
                      ole="button" 
                      aria-haspopup="true" 
                      aria-expanded="false"
                    ><span className="glyphicon glyphicon-menu-hamburger"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><Link to={"/home"}>Home</Link></li>
                      <li><Link to={"/AboutMe"}>About</Link></li>
                      <li><Link to={"/Projects"}>Projects</Link></li>
                      <li><Link to={"/Contact"}>Contact</Link></li>
                    </ul>
                  </div>
                <div className="col-sm-2 col-xs-10">
                    <a href={Resume} target="_blank" className="flexCenter logoIcon">
                      <span className="padMe">Resume</span>
                      <span className="glyphicon glyphicon-download-alt padMe"></span>
                    </a>
                </div>
                <div className="col-sm-5"></div>
                <div className="col-sm-5 hidden-xs">
                  <div className="col-sm-3 navLinks"><Link to={"/home"}>Home</Link></div>
                  <div className="col-sm-3 navLinks"><Link to={"/AboutMe"}>About</Link></div>
                  <div className="col-sm-3 navLinks"><Link to={"/Projects"}>Projects</Link></div>
                  <div className="col-sm-3 navLinks"><Link to={"/Contact"}>Contact</Link></div>
                </div>
              </nav>
            </div>

            <div className="mainWrapper container">
      		    <Route path={"/home"} component={Home}/>
              <Route path={"/AboutMe"} component={AboutMe}/>
              <Route path={"/Projects"} component={Projects}/>
              <Route path={"/Contact"} component={Contact}/>
              <Redirect from="/" to="/home" />
            </div>
      		</div> 
      	</Router>
    );
  }
}

export default App;
