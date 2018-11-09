import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class EntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: ""
    };
    this.updateText = this.updateText.bind(this);
    this.backButton = this.backButton.bind(this);
  }

  updateText(e) {
    this.setState({entry: e.currentTarget.value});
  }

  backButton(e) {
    e.preventDefault();
    this.props.history.push('/questions');
  }
  render() {
    return (
      <div>
        <button onClick={this.backButton}>Back to Questions</button>
        <h1>{this.props.currentQuestion.title}</h1>
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

const msp = state => ({
  question: state.questions.questions,
  currentQuestion: state.questions.currentQuestion
});


export default withRouter(connect(msp)(EntryForm));
