import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getQuestions, setCurrentQuestion} from '../../actions/questionActions';
import QuestionItems from './QuestionItems';
import {closeModal} from '../../actions/modalActions';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }
  

  componentDidMount() {
    const questions = this.props.questions;
    if(!questions) {
      this.props.getQuestions().then(() => {
        this.setState({questions: this.props.questions});
      });
    } else {
      this.setState({ questions: this.props.questions });
    }
    this.props.closeModal();
  }

  render() {
    const arr = Array.from(this.state.questions);
    return (
      <div>
        <ul>
          {arr.map(el => <QuestionItems setQuestion={this.props.setCurrentQuestion} question={el} key={el._id}/>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questions
});








export default connect(mapStateToProps, 
  {getQuestions, closeModal, setCurrentQuestion}
)(Questions);
