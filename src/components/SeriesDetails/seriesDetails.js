import React, { Component } from 'react'
import * as SeriesParser from '../../utils/SeriesParser'
import * as strings from '../../utils/constants'
import './style.css'


class SeriesDetails extends Component {
  render() {
    const { location } = this.props
    const seriesDetails = location.seriesDetails.series;

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

    return (
      <div className="series-details">
          <div className="series-details-top">
            {seriesDetails && 
                <div className="series-landscape" style={thumbStyle}></div>
            }
            </div>
            {title && 
                <p className="series-title">{title}
                <span className="series-year">({year})</span>
                </p>
            }
            {parentalRating && 
                <p className="series-title-item">
                {strings.PARENTAL_RATING}
                <span className="series-parental">
                    {parentalRating}
                    {strings.YEARS}
                </span>
                </p>
            }
            
            {seasons && 
                <p className="series-title-item">
                {strings.SEASONS}
                {seasons}
                <span className="series-time">{availabilityInfo}</span>
                </p>
            }
            
            {synopsis && 
                <p className="series-title-item">
                {strings.SYNOPSIS}
                </p>
            }
            <p className="series-synopsis">{synopsis}</p>
            {actors && 
                <p className="series-title-item">
                {strings.CASTING}
                </p>
            }
            <p className="series-answer-item">
            {actors}
            </p>
            {creators && 
                <p className="series-title-item">
                {strings.CREATORS}
                </p>
            }
            <p className="series-answer-item">
            {creators}
            </p> 
      </div>
    )
  }
}

export default SeriesDetails