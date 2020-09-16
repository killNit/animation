import React from 'react';
import Animation from './Animation';



class App extends React.Component {
  state = { showAnimation: true };

  render() {
    const { showAnimation } = this.state;
      return (
        <>
        <div>Animation</div>
        <Animation />
        </>
      );
  }
}

export default App;
