import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
// ScoreBoard

// Shuffle onClick
/*
getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}*/
/*
const card = document.querySelector('#pushy');
button.addEventListener('click', () => {
    for(var i = 0; i <shuffleCards; i++) {
      let rndo = getRandomInt(0, 15);
      card = cards[i];
      cards[i] = cards[rndo];
      cards[rndo] = card;
    }
    this.classList.toggle('on');
});

*/
export default App;