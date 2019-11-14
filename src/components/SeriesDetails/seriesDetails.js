import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as SeriesParser from '../../utils/SeriesParser'
import * as strings from '../../utils/constants'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Redirect } from 'react-router-dom'

import './style.css'

class SeriesDetails extends Component {

  static propTypes = {
    series: PropTypes.object,
  }

  state = {
    backPressed: false,
  }

  navigateToHome = () => {
    this.setState({ backPressed: true })
  }

  render() {
    let serie = this.props //check if it cames from keyboard
    const isBackPressed = this.state.backPressed;
    let seriesDetails = serie.seriesDetails;

    if(undefined === seriesDetails) {
        //if it cames from clicking
        const { location } = this.props;
        // in case of loading the details page directly
        if(location.seriesDetails)
          seriesDetails = location.seriesDetails.series;
    }

    let thumbStyle = {}
    let title = ''
    let synopsis = ''
    let year = ''
    let parentalRating = ''
    let actors = []
    let creators = []
    let availabilityInfo = ''
    let seasons = ''

    if (seriesDetails) {
        thumbStyle = {
            backgroundImage: 'url(' + SeriesParser.getLandscape(seriesDetails) + ')',
        };
        title = SeriesParser.getTitle(seriesDetails)
        synopsis = SeriesParser.getSynopsis(seriesDetails)
        year = SeriesParser.getYear(seriesDetails)
        parentalRating = SeriesParser.getParentalRating(seriesDetails)

        actors = SeriesParser.getActors(seriesDetails)
        if(actors)
            actors = actors.join(', ')

        creators = SeriesParser.getCreators(seriesDetails)
        if(creators)
            creators = creators.join(', ')
        
        availabilityInfo = SeriesParser.getAvailability(seriesDetails)
        seasons = SeriesParser.getSeasons(seriesDetails)
      }

    // A conditional render to redirect to the main page
    // using the keyboard or the mouse.

    // Key enabled to navigate back to main page: b or ESC

    return (
      <div className="series-details">
          <KeyboardEventHandler
                    handleKeys={['esc', 'b']}
                    onKeyEvent={(key, e) => this.navigateToHome()}
          />
          { isBackPressed ? (
                <Redirect to={{
                    pathname: '/',
                }}></Redirect>
            ) : (
                <div>
                    <div className="series-details-top">
                    {seriesDetails &&
                        <div className="series-landscape" style={thumbStyle}></div>
                    }
                    </div>
                    { title &&
                        <p className="series-title">{title}
                        <span className="series-year">({year})</span>
                        </p>
                    }
                    { parentalRating &&
                        <p className="series-title-item">
                        {strings.PARENTAL_RATING}
                        <span className="series-parental">
                            { parentalRating }
                            { strings.YEARS }
                        </span>
                        </p>
                    }
                    { seasons &&
                        <p className="series-title-item">
                        { strings.SEASONS }
                        { seasons }
                        <span className="series-time">{availabilityInfo}</span>
                        </p>
                    }

                    { synopsis &&
                        <p className="series-title-item">
                        { strings.SYNOPSIS }
                        </p>
                    }
                    { synopsis &&
                       <p className="series-synopsis">{synopsis}</p>
                    }
                    { actors &&
                        <p className="series-title-item">
                        { strings.CASTING }
                        </p>
                    }
                    <p className="series-answer-item">
                    { actors }
                    </p>
                    { creators &&
                        <p className="series-title-item">
                        { strings.CREATORS }
                        </p>
                    }
                    <p className="series-answer-item">
                    { creators }
                    </p>
                </div>
             )
            }
        </div>
    )
  }
}

export default SeriesDetails