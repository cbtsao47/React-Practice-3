import React from "react";

class Stewie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child: props.child,
      input: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleTurnHairToBrown = () => {
    const childAttrs = this.state.child;
    childAttrs.hairColor = this.state.input;
    this.setState({
      child: childAttrs
    });
  };
  render() {
    return (
      <div>
        <h4>{this.state.child.name}</h4>
        <p>Hair Color:{this.state.child.hairColor}</p>
        <blockquote>{this.state.child.catchPhrase}</blockquote>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
          name="input"
        />
        <button onClick={this.handleTurnHairToBrown}>
          Click to Change My Hair Color!
        </button>
      </div>
    );
  }
}

export default Stewie;
