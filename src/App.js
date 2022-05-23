import { Component } from "react";
import "./appStyles.css";
import Summary from "./components/Summary";
import Employment from "./components/Employment";
import Skills from "./components/Skills";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="appContainer">
        <h2 className="sectionHeading">About Me</h2>
        <Summary />
        <h2 className="sectionHeading">Employment History</h2>
        <Employment />
        <h2 className="sectionHeading">Key Skills</h2>
        <Skills />
      </div>
    );
  }
}

export default App;
