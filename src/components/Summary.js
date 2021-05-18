import React, { Fragment } from 'react';

const Summary = () => {
  return (
    <Fragment>
      <p>Congratulations on finishing the quiz. Your raw score is <span></span> out of <span></span>.</p>
      <p>You did better than or as well as 76 percent of Times readers.</p>

      <p>We’ll be back next Friday with another quiz. To be ready for it — and stay up on the news — read The Morning newsletter. You can subscribe <a href="https://www.nytimes.com/newsletters/morning-briefing" target="_blank" rel="noreferrer">here</a> if you don’t already get it.</p>

      <p>And you can submit a suggested question for next week’s quiz <a href="https://www.nytimes.com/2021/01/14/briefing/news-quiz-reader-questions.html" target="_blank" rel="noreferrer">here</a>.</p>
    </Fragment>
  );
}

export default Summary;