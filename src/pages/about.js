import React from "react";

class Form extends React.Component {
  state = {
    value: "Tony Stark and Romanov is dead"
  };

  handleChange = event => {
    this.setState.value({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`Fun Fact: ${this.state.value}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>Fun Fact</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </fieldset>
        <input type="submit" value="Submit Fun Fact" />

        <pre>
          <code>{this.state.value}</code>
        </pre>
      </form>
    );
  }
}

export default Form;
