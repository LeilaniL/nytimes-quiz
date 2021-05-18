import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import QuizQuestion from './QuizQuestion';
import Summary from './Summary';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      numberCorrect: 0,
    }
  }

  render() {
    const { testQuestions } = this.props;
    {/* // TODO add unique keys */ }
    return (
      <React.Fragment>
        {testQuestions.map((q) =>
        (<QuizQuestion key={v4()} questionText={q.questionText} answerText={q.answerText} />
        ))}
        {this.state.completed && <Summary />}
      </React.Fragment>
    );
  }
}

Quiz.propTypes = {
  testQuestions: PropTypes.array
}

export default Quiz;