import React, { Component } from "react";
import * as SeriesAPI from './utils/SeriesAPI'


export default class App extends Component {
  fillContent = () => {
    let series = []
    SeriesAPI.getData()
    .then((data) => {
      console.log('data = ', data);
      series = SeriesAPI.getSeries(data)
      console.log('Series = ', series);
    })
  };

  componentDidMount() {
    this.fillContent();
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
