import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Homepage extends React.Component{
  render(){
    return <h1> This is HomePage </h1>
  }
}
class ShafeeqPage extends React.Component {
  render(){
    return <h1> This is Shafeeq's Page </h1>
  }
}

class AboutUs extends React.Component{
  render(){
    return <h1> This is about us </h1>
  }
}

class App extends React.Component{
  render(){
    return(
      <div>
        <h1> Routing Application </h1>
        <Router>
        <Link to="/"> MainPage </Link>
          <br></br>
        <Link to="/home"> HomePage </Link>
          <br></br>          
        <Link to="/about"> AboutUs </Link>
          <br></br>
        <Link to="/Shafeeq"> ShafeeqPage </Link>
          <br></br>
          <div>
            <Route path="/home" component={Homepage}/>
            <Route path="/about" component={AboutUs}/>
            <Route path="/shafeeq" component={ShafeeqPage}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default App;
