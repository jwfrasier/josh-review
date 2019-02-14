import React, { Component } from "react";
import { Header } from "./Header";

const URL = "http://localhost:3000/pokemon";
class App extends Component {
  state = {
    pokemon: []
  };

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(pokemon => {
        this.setState({
          pokemon: pokemon
        });
      })
      .then(() => console.log(this.state.pokemon));
  }

  render() {
    return (
      <div className="App">
        <Header />

        <p>
          {this.state.pokemon.map(pokemon => {
            return ({pokemon.name})
          }
          )}
        </p>
      </div>
    );
  }
}

export default App;
