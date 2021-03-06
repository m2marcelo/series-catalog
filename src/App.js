import React, { Component } from "react";
import { Route } from 'react-router-dom'

import * as SeriesAPI from './utils/SeriesAPI'
import SeriesDetails from './components/SeriesDetails/seriesDetails'
import Catalog from './components/Catalog/catalog'
import * as Strings from './utils/constants'
import './App.css'


export default class App extends Component {

  state = {
    series:[],
  }

  fillContent = () => {
    let series = []
    try {
      SeriesAPI.getData()
      .then((data) => {
        if (data) {
          series = SeriesAPI.getSeries(data)
          this.setState({ series })
        }
      })
    }
    catch (e) {
      console.log(e.message())
    }
  };

  componentDidMount() {
    this.fillContent();
  };

  render() {
    const { series } = this.state

    //The app will support the main page and the details page,
    //one at the time, using the route to redirect.

    return (
      <div>
        <div className="header">
          <img className="logo" 
            src={Strings.LOGO}
            width={Strings.LOGO_WIDTH}
            height={Strings.LOGO_HEIGHT}
          />
        </div>
        { series.length === 0 ? (
                <div className="error">
                  {Strings.FETCH_ERROR}
                </div>
            ) : (
              <div className="carousel">
                  <Route exact path='/' render={() => (
                    <Catalog series={series}/>
                  )}/>
                  <Route path='/details' component={SeriesDetails}/>
              </div>
            )
        }
        <div className="footer" />
      </div>
    );
  }
}
