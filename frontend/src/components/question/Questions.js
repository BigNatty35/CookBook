import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../../actions/questionActions';
import QuestionItems from './QuestionItems';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }
  

  componentDidMount() {
    this.props.getQuestions().then(() => {
      this.setState({questions: this.props.questions});
    });
  }

  render() {
    const arr = Array.from(this.state.questions);
    
    return (
      <div>
      <ul>
        <li>
         {arr.map(el => <QuestionItems question={el} key={el.id}/>)}
        </li>
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questions
});








export default connect(mapStateToProps, {getQuestions})(Questions);
