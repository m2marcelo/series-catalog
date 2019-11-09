import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    fetch('serier/samtliga', {
      method: "GET",
      headers: {
          "Accept": "application/json",
          "Access-Control-Allow-Origin": '*'
      }
    })
    .then(async function(response) {
      console.log('Teste');
      console.log(await response.json());
    })
  }

  render() {
    return (
      <div>
          <p>
            Initial code
          </p>
      </div>
    );
  }
}
