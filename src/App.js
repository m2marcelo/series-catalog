import React, { Component } from "react";
import * as SeriesAPI from './utils/SeriesAPI'


export default class App extends Component {
  componentDidMount() {
    SeriesAPI.getSeries()
    .then((series) => {
      console.log('Series = ', series);
    })
  };

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
