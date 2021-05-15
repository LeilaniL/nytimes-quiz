import { Container } from 'semantic-ui-react';
import Header from '../src/components/Header';
import Quiz from '../src/components/Quiz';

function App() {
  const placeholderQ1 = { questionText: "What's the correct answer?", answerText: ["Correct answer", "Another answer", "Yet another false answer", "Nope don't pick this one"] };
  const placeholderQ2 = { questionText: "Is this another quiz question?", answerText: ["Wrong answer", "Another answer", "Yet another false answer", "Why yes it is"] };
  const placeholderQ3 = { questionText: "What's the correct answer this time?", answerText: ["Pick me", "Another answer", "Yet another wrong answer", "Nope don't pick this one"] };
  const testQuestions = [placeholderQ1, placeholderQ2, placeholderQ3];
  return (
    <Container>
      <Header />
      <Quiz testQuestions={testQuestions} />
    </Container>
  );
}

export default App;
