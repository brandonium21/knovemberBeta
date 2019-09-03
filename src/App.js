import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Guide from './Components/Guide/Guide';
import Home from './Components/Home/Home';
import FindOut from './Components/FindOut/FindOut';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';



class App extends React.Component {

  componentDidMount(){
    AOS.init({
      duration : 2000,
      once : true
    });
  }
  render () {
    return (
      <div className="App">
        <Router>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <Navbar bg="white" className="justify-content-between">
            <NavLink to="/">
              <p className="navbar-brand mx-auto m-0 pt-1 font-weight-bold font-italic pt-2" style={{ fontSize: "2em"}}>Knovember</p>
            </NavLink>
            <NavLink to="/find-out" className="navbar-nav ml-auto text-decoration-none"><Button variant={"outline-primary"} >Find Out</Button></NavLink>
          </Navbar>
        
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/guide/:guide" component={Guide} />
            <Route path="/guide" exact component={Guide} />
            <Route path="/find-out" exact component={FindOut} />
            <Route render={ () => <h1>404 Error</h1> } />
          </Switch>
        </Router>
      </div>
    );
  } 
}

export default App;
