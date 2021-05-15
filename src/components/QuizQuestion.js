import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import QuizAnswer from './QuizAnswer';

const QuizQuestion = (props) => {
  return (
    <Segment>
      <p>{props.questionText || "Why didn't you give me a question in my props?"}</p>
      <QuizAnswer text="Placeholder answer value courtesy of Question component" />
    </Segment>
  );
}

QuizQuestion.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.array
}

export default QuizQuestion;