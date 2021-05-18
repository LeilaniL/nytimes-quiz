import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Segment } from 'semantic-ui-react';
import QuizAnswer from './QuizAnswer';

const QuizQuestion = (props) => {
  console.log(props.answerText)
  return (
    <Segment>
      <p>{props.questionText || "Why didn't you give me a question in my props?"}</p>
      {console.log(props.answerText.length)}
      {props.answerText.map((a) => {
        // TODO figure out why QuizAnswer isn't returned
        <QuizAnswer key={v4()} text={a} />
      })}
      <hr />
    </Segment>
  );
}

QuizQuestion.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.array
  // isMultipleChoice: PropTypes.boolean
}

export default QuizQuestion;