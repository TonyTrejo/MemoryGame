import React, { Component } from "react";
import Header from "./Jumbotron/Jumbotron";
import Nav from './Nav/nav'
import Results from "./gameBoard/gameBoard";

class GameOps extends Component {
    state = {
        images: [

            {
                id: 1,
                src: '../../images/food-pizza-roll-baked.jpg',
                clicked: false
            },
            {
                id: 2,
                src: '../../images/pexels-photo-205961.jpeg',
                clicked: false
            },
            {
                id: 3,
                src: '../../images/pexels-photo-209194.jpeg',
                clicked: false
            },
            {
                id: 4,
                src: '../../images/pexels-photo-209196.jpeg',
                clicked: false
            },
            {
                id: 5,
                src: '../../images/pexels-photo-209201.jpeg',
                clicked: false
            },
            {
                id: 6,
                src: '../../images/pexels-photo-209291.jpeg',
                clicked: false
            },
            {
                id: 7,
                src: '../../images/pexels-photo-209403.jpeg',
                clicked: false
            },
            {
                id: 8,
                src: '../../images/pexels-photo-295043.jpeg',
                clicked: false
            },
            {
                id: 9,
                src: '../../images/pexels-photo-298217.jpeg',
                clicked: false
            },
            {
                id: 10,
                src: '../../images/pexels-photo-372851.jpeg',
                clicked: false
            },
            {
                id: 11,
                src: '../../images/pexels-photo-461385.jpeg',
                clicked: false
            },
            {
                id: 12,
                src: '/images/pexels-photo-533247.jpeg',
                clicked: false
            },
            {
                id: 13,
                src: '../../images/pexels-photo-745988.jpeg',
                clicked: false
            },
            {
                id: 14,
                src: '../../images/pexels-photo-808941.jpeg',
                clicked: false
            },
            {
                id: 15,
                src: '../../images/pexels-photo-965741.jpeg',
                clicked: false
            },
            {
                id: 16,
                src: '../../images/background-baguette-baked-bakery-42064.jpeg',
                clicked: false
            },

        ]
    }
  

    shuffleImg = id => {
        let tempState = this.state.images;

        for (var j = 0; j < tempState.length; j++) {
            const i = Math.floor(Math.random() * tempState.length +1 );
            const mix = tempState[j];
            tempState[j] = tempState[i];
            tempState[i] = mix;
        }
    }

    //Scoring function
/*let score = 0;
let topscore = 0;

document.onclick = function() {
    const userGuess = String.onclick(event.state.onclick);
    if(userGuess === 'correct'){
        score++, topscore++
    } else(endGame)
}*/

 

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Results shuffleImg={this.shuffleImg} results={this.state.images} />
            </div>
        );
    }

}

export default GameOps;