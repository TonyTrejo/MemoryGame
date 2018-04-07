import React, { Component } from "react";
import Header from "./Jumbotron/Jumbotron";
import Nav from './Nav/nav'
import Results from "./gameBoard/gameBoard";

class GameOps extends Component {
    state = {
        images: []
    }

    componentDidMount() {
        const images = [
            { src: 'https://www.pexels.com/photo/photography-of-pink-doughnut-928475/' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            { src: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
        ]
        this.setState({ images })
    }

    // score function - pass to ./Nav/nav.js

// button needs to update both score and shuffle    

    // shuffle function - pass to ./gameBoard/gameBoard.js
    /*}
        shuffleDeck = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        const card = document.querySelector('#pushy');
        button.addEventListener('click', () => {
            for(var i = 0; i <shuffleCards; i++) {
              let rndo = getRandomInt(0, 15);
              card = cards[i];
              cards[i] = cards[rndo];
              cards[rndo] = card;
            }
            this.classList.toggle('on');
        });*/

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Results results={this.state.images} />
            </div>
        );
    }

}
export default GameOps;