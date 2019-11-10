import React, { Component } from "react";
import { Route } from 'react-router-dom'

import * as SeriesAPI from './utils/SeriesAPI'
import SeriesDetails from './components/SeriesDetails/seriesDetails'
import Catalog from './components/Catalog/catalog'
import './App.css'


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
    let logoImage = {}

    logoImage = {
      backgroundImage: 'url(' + 'https://assets.viaplay.tv/frontend-2017080106/images/header-logo-large.png' + ')',
  };

    return (
      <div>
        <div className="header">
          <img className="logo" src="https://assets.viaplay.tv/frontend-2017080106/images/header-logo-large.png" width="144" height="35" />
        </div>
        <div className="carousel">
            <Route exact path='/' render={() => (
              <Catalog series={series}/>
            )}/>
            <Route path='/details' component={SeriesDetails}/>
        </div>
        <div className="footer" />
      </div>
    );
  }
}
