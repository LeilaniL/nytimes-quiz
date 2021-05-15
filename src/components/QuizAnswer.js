import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const QuizAnswer = (props) => {
  return (
    <Button>{props.text}</Button>
  );
}

QuizAnswer.propTypes = {
  text: PropTypes.string
}
export default QuizAnswer;