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
            { src: '../../images/background-baguette-baked-bakery-42064.jpeg' },
            { src: './images/food-pizza-roll-baked.jpg' },
            { src: './images/pexels-photo-205961.jpeg' },
            { src: './images/pexels-photo-209194.jpeg' },
            { src: './images/pexels-photo-209196.jpeg' },
            { src: './images/pexels-photo-209201.jpeg' },
            { src: './images/pexels-photo-209291.jpeg' },
            { src: './images/pexels-photo-209403.jpeg' },
            { src: './images/pexels-photo-295043.jpeg' },
            { src: './images/pexels-photo-298217.jpeg' },
            { src: './images/pexels-photo-372851.jpeg' },
            { src: './images/pexels-photo-461385.jpeg' },
            { src: './images/pexels-photo-533247.jpeg' },
            { src: './images/pexels-photo-745988.jpeg' },
            { src: './images/pexels-photo-808941.jpeg' },
            { src: './images/pexels-photo-965741.jpeg' },


        ]
        this.setState({ images })
    }
    /*
    // button needs to update both scores and shuffle    

    // shuffle function - pass to ./gameBoard/gameBoard.js
    }
        shuffleCard = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        const card = document.querySelector('rndo');
        button.addEventListener('click', () => {
            for(var i = 0; i <shuffleCards; i++) {
              let rndo = getRandomInt(0, 15);
              card = cards[i];
              cards[i] = cards[rndo];
              cards[rndo] = card;
            }
            this.classList.toggle('on');
        });
    // score function - pass to ./Nav/nav.js
    //const score = function(props) {
        
    */
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