import React, { Component } from "react";
import * as SeriesAPI from './utils/SeriesAPI'
import SeriesItem from './components/SeriesItem/seriesItem'

export default class App extends Component {

  state = {
    series:[],
  }

  fillContent = () => {
    let series = []
    SeriesAPI.getData()
    .then((data) => {
      series = SeriesAPI.getSeries(data)
      this.setState({ series })
      console.log('Series = ', series);
    })
  };

  componentDidMount() {
    this.fillContent();
  };

  render() {
    const { series } = this.state

    return (
      <div>
          <p>
            Initial code
          </p>
          {series.length > 0 && <SeriesItem series={series}/>}
      </div>
    );
  }
}
