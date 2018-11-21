import React from "react";
import Stewie from "./Stewie";
class Peter extends React.Component {
  constructor() {
    super();
    this.state = {
      parentName: "Peter Griffin",
      childAttributes: {
        name: "Stewie",
        hairColor: "N/A",
        catchPhrase: "Victory is mine!"
      }
    };
  }

  render() {
    return (
      <div className="Appw">
        <h1>My name is{this.state.parentName}</h1>
        <Stewie child={this.state.childAttributes} />
      </div>
    );
  }
}
export default Peter;
