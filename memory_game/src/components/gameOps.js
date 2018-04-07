import React, { Component } from "react";
//import Cards
import Header from "./components/Jumbotron/Jumbtron";
// deck shuffler

class gameOps extends Component {

    shuffleDeck = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    render() {
        return (<Header />
        )
    }

}
 export default gameOps;