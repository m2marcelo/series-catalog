import React, { Component } from "react";
import { Route } from 'react-router-dom'

import * as SeriesAPI from './utils/SeriesAPI'
import SeriesDetails from './components/SeriesDetails/seriesDetails'
import Catalog from './components/Catalog/catalog'

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
          <Route exact path='/' render={() => (
            <Catalog series={series}/>
          )}/>
          <Route path='/details' component={SeriesDetails}/>

      </div>
    );
  }
}