import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: ""
    };
  }

  getSchoolDetails = () => {
    var url = "http://localhost:5000/getSchoolName?username=sushant@ecinfosolutions.com";
    fetch(url)
      .then(response => response.text())
      .then(results => {
        console.log("results @@ " + results);
        this.setState({ schoolName: results });
      })
      .catch(error => {
        console.log("error @@ " + JSON.stringify(error));
      });
  };

  componentDidMount() {
    this.getSchoolDetails();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Your School name is : {this.state.schoolName}</p>
          {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
