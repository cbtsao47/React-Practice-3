import React from "react";

class Stewie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child: props.child,
      hair: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleTurnHairToBrown = () => {
    const childAttrs = this.state.child;
    childAttrs.hairColor = this.state.hair;
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
          value={this.state.hair}
          name="hair"
        />
        <button onClick={this.handleTurnHairToBrown}>
          Click to Change My Hair Color!
        </button>
      </div>
    );
  }
}

export default Stewie;
