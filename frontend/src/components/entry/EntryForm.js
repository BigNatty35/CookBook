import React, { Component } from 'react';

class EntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: ""
    };
    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({entry: e.currentTarget.value});
  }
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">
            Answer the question!
          </label>
          <textarea type="text" value={this.state.text} onChange={this.updateText}
          cols="100" rows="25"/>
        </form>
      </div>
    );
  }
}

export default EntryForm;
