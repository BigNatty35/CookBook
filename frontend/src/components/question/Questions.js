import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../../actions/questionActions';
import QuestionItems from './QuestionItems';
import EntryForm from '../../components/entry/EntryForm';
import {closeModal} from '../../actions/modalActions';

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

    this.props.closeModal();
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
      <EntryForm/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questions
});








export default connect(mapStateToProps, {getQuestions, closeModal})(Questions);
