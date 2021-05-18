import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

// const buttonStyles = {
//   //
// }
const selectedMultiChoice = {
  backgroundColor: "#2f84f3",
  color: "white"
}
// wrong #e27676
// right #95c198
// selected/hovered #053e69
class QuizAnswer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   completed: false,
    //   numberCorrect: 0,
    // }
  }
  render() {
    return (<Button primary>{this.props.text}</Button>
    );
  }
}

QuizAnswer.propTypes = {
  text: PropTypes.string
}

export default QuizAnswer;