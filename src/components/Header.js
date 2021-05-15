import React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react';

const headerStyle = {
  fontFamily: "'Times New Roman', Times, serif",
  fontSize: "9vw",

}
function Header() {
  return (<React.Fragment>
    <SemanticHeader style={headerStyle}>The News Quiz</SemanticHeader>
    <p>Did you follow the news this week? Take our quiz to see how well you stack up with other Times readers. We’ll be back next Friday with a new weekly quiz.</p>
  </React.Fragment>)
}

export default Header;